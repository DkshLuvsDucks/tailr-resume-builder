import ai from "../configs/ai.js"
import Resume from "../models/Resume.js"
import { handleAIError } from "../utils/handleAIError.js";

// controller for enhancing a resume's professional summary
// POST: /api/ai/enhance-pro-sum
export const enhanceProfessionalSummary = async (req, res) => {
    try {
        const { userContent } = req.body

        if (!userContent) {
            return res.status(400).json({ message: "Missing required fields" })
        }

        const response = await ai.chat.completions.create({
            model: process.env.OPENAI_MODEL,
            messages: [
                {
                    role: "system",
                    content: `You are a professional resume writer. Rewrite the user's summary into a strong, ATS-friendly resume summary.

                            Rules:
                            - Exactly 2 sentences, 40-70 words total.
                            - Highlight key skills/experience/accomplishments if present; mention career goal only if it fits naturally.
                            - Confident, professional tone with strong action language. No first-person pronouns, no unsupported clichés ("hardworking", "team player", etc).
                            - Never invent or exaggerate information.
                            - Naturally include relevant keywords for ATS.
                            - Output: plain text only, no headings/bullets/quotes/markdown.`
                },
                {
                    role: "user",
                    content: `Candidate Information:\n${userContent}\n\nRewrite as a professional resume summary.`
                },
            ],
        })

        const enhancedContent = response.choices[0].message.content

        return res.status(200).json({ enhancedContent })
    } catch (error) {
        return handleAIError(error, res);
    }
}


// controller for enhancing a resume's job description
// POST: /api/ai/enhance-job-desc
export const enhanceJobDescription = async (req, res) => {
    try {
        const { userContent } = req.body

        if (!userContent) {
            return res.status(400).json({ message: "Missing required fields" })
        }

        const response = await ai.chat.completions.create({
            model: process.env.OPENAI_MODEL,
            messages: [
                {
                    role: "system",
                    content: `You are an expert resume writer. Rewrite the candidate's experience/project description into stronger ATS-friendly bullet points.

                            Rules:
                            - Keep the same number of bullets where possible; start each with a strong action verb.
                            - 15-30 words per line; highlight tools/skills/impact when present.
                            - Quantify only if numbers are explicitly given in the input.
                            - Naturally include relevant keywords for ATS.
                            - Never fabricate or exaggerate. No repeated info, no filler words.
                            - Output: one rewritten sentence per line, separated only by "\\n". No "*", "-", "•", numbering, headings, or markdown.`
                },
                {
                    role: "user",
                    content: `Job Description / Experience:\n${userContent}\n\nRewrite as strong ATS-friendly bullet points.`
                },
            ],
        })

        const enhancedContent = response.choices[0].message.content

        return res.status(200).json({ enhancedContent })
    } catch (error) {
        return handleAIError(error, res);
    }
}


// controller for uploading a resume to the database
// POST: /api/ai/upload-resume
export const uploadResume = async (req, res) => {
    try {
        const { resumeText, title } = req.body
        const userId = req.userId

        if (!resumeText) {
            return res.status(400).json({ message: "Missing required fields" })
        }

        const systemPrompt = `Extract structured data from a resume into this exact JSON schema. Return ONLY valid JSON, no markdown/comments/extra text.

                                Schema:
                                {
                                "professional_summary": "",
                                "skills": [],
                                "personal_info": {"image": "", "full_name": "", "profession": "", "email": "", "phone": "", "location": "", "linkedin": "", "website": ""},
                                "experience": [{"company": "", "position": "", "start_date": "", "end_date": "", "description": "", "is_current": false}],
                                "projects": [{"name": "", "type": "", "description": ""}],
                                "education": [{"institution": "", "degree": "", "field": "", "graduation_date": "", "gpa": ""}]
                                }

                                Rules:
                                - Use "" / [] / false for missing values. Never invent or infer facts.
                                - professional_summary: extract verbatim if present, do not rewrite.
                                - personal_info.image is always "" unless explicitly given.
                                - experience/projects: combine bullet points into one description string joined with "\\n", preserved verbatim (not summarized). is_current is true only if resume says Present/Current/Ongoing.
                                - education.gpa: "" if not given.
                                - Include every schema key, no extra fields, exactly one JSON object.
                                - skills: pick the 8-12 most relevant/impactful skills for recruitment (prioritize technical/hard skills matching the candidate's role). Deduplicate, don't just list everything mentioned.
                                - Dates (start_date, end_date, graduation_date): format as YYYY-MM (e.g. "2025-01"). Convert any written form ("Jan 2025", "Jan, 25") accordingly. Year only -> "YYYY-01". Empty if missing/unparseable.`

        const userprompt = `Extract this resume into the required JSON format:\n\n${resumeText}`

        const response = await ai.chat.completions.create({
            model: process.env.OPENAI_MODEL,
            messages: [
                {
                    role: "system",
                    content: systemPrompt
                },
                {
                    role: "user",
                    content: userprompt
                },
            ],
            response_format: { type: "json_object" }
        })

        const extractedData = response.choices[0].message.content
        const parsedData = JSON.parse(extractedData)
        const newResume = await Resume.create({ userId, title, ...parsedData })

        return res.json({ resumeId: newResume._id })
    } catch (error) {
        return handleAIError(error, res);
    }
}
