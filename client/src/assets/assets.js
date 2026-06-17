import dummy_profile_1 from './dummy_profile_1.jpg'
import dummy_profile_2 from './dummy_profile_2.jpg'
import dummy_profile_3 from './dummy_profile_3.jpg'


export const dummyResumeData = [
    {
        // -------------------------------- RESUME-1 --------------------------------
        personal_info: {
            full_name: "Jonathon Bailey",
            email: "jonathon.bailey@example.com",
            phone: "+1 415 728 3945",
            location: "Seattle, WA, USA",
            linkedin: "https://www.linkedin.com/in/jonathonbailey",
            website: "https://www.jonathonbailey.dev",
            profession: "Senior Cloud Software Engineer",
            image: dummy_profile_1
        },
        _id: "91ab6f7d8c9e123456789001",
        userId: "91ab6f7d8c9e123456789002",
        title: "Jonathon's Resume",
        public: true,
        professional_summary: "Senior Cloud Software Engineer with 8+ years of experience designing scalable SaaS platforms, cloud-native applications, and DevOps automation pipelines using AWS, Kubernetes, and Node.js.",
        skills: ["AWS", "Node.js", "TypeScript", "React", "Docker", "Kubernetes", "Terraform", "CI/CD", "PostgreSQL", "GraphQL"],
        experience: [
            {
                company: "CloudScale Technologies",
                position: "Senior Cloud Software Engineer",
                start_date: "2022-04",
                end_date: "Present",
                description: "Architected cloud-native SaaS platforms using AWS and Kubernetes while leading DevOps initiatives.",
                is_current: true,
                _id: "91ab6f7d8c9e123456789003"
            },
            {
                company: "Nexa Digital Solutions",
                position: "Full Stack Developer",
                start_date: "2018-06",
                end_date: "2022-03",
                description: "Built enterprise web applications with React, Node.js, and PostgreSQL.",
                is_current: false,
                _id: "91ab6f7d8c9e123456789004"
            }
        ],
        education: [
            {
                institution: "University of Washington",
                degree: "B.Sc.",
                field: "Computer Science",
                graduation_date: "2018-05",
                gpa: "3.8",
                _id: "91ab6f7d8c9e123456789005"
            }
        ],
        template: "minimal-image",
        accent_color: "#0EA5E9",
        project: [
            {
                name: "CloudOps Manager",
                type: "Cloud Infrastructure Platform",
                description: "AWS infrastructure automation dashboard built with React, Node.js, and Terraform.",
                _id: "91ab6f7d8c9e123456789006"
            },
            {
                name: "DeployIQ",
                type: "DevOps Automation Tool",
                description: "CI/CD orchestration platform for Kubernetes deployments.",
                _id: "91ab6f7d8c9e123456789007"
            }
        ],
        updatedAt: "2025-09-23T13:39:38.395Z",
        createdAt: "2025-09-23T13:39:38.395Z"
    },
        {
        // -------------------------------- RESUME-2 --------------------------------
        personal_info: {
            full_name: "Sophia Carter",
            email: "sophia.carter@example.com",
            phone: "+1 617 440 9821",
            location: "Boston, MA, USA",
            linkedin: "https://www.linkedin.com/in/sophiacarter",
            website: "https://www.sophiacarter.ai",
            profession: "Machine Learning Engineer",
            image: dummy_profile_2
        },
        _id: "92bc7g8e9d0f234567890111",
        userId: "92bc7g8e9d0f234567890112",
        title: "Sophia's Resume",
        public: true,
        professional_summary: "Machine Learning Engineer with 6+ years of experience building AI-powered applications, predictive analytics systems, and NLP solutions using Python and modern deep learning frameworks.",
        skills: ["Python", "TensorFlow", "PyTorch", "Machine Learning", "NLP", "Scikit-Learn", "SQL", "AWS", "Docker", "FastAPI"],
        experience: [
            {
                company: "VisionAI Labs",
                position: "Senior Machine Learning Engineer",
                start_date: "2022-01",
                end_date: "Present",
                description: "Developing NLP and computer vision models for enterprise AI products.",
                is_current: true,
                _id: "92bc7g8e9d0f234567890113"
            },
            {
                company: "DataMind Analytics",
                position: "Machine Learning Engineer",
                start_date: "2019-06",
                end_date: "2021-12",
                description: "Built predictive analytics pipelines and recommendation systems using Python.",
                is_current: false,
                _id: "92bc7g8e9d0f234567890114"
            }
        ],
        education: [
            {
                institution: "Massachusetts Institute of Technology",
                degree: "M.Sc.",
                field: "Artificial Intelligence",
                graduation_date: "2019-05",
                gpa: "3.9",
                _id: "92bc7g8e9d0f234567890115"
            }
        ],
        template: "minimal-image",
        accent_color: "#8B5CF6",
        project: [
            {
                name: "SmartAssist AI",
                type: "NLP Assistant",
                description: "AI-powered virtual assistant using Transformer models and FastAPI.",
                _id: "92bc7g8e9d0f234567890116"
            },
            {
                name: "PredictFlow",
                type: "Predictive Analytics Platform",
                description: "Forecasting platform using machine learning for business intelligence.",
                _id: "92bc7g8e9d0f234567890117"
            }
        ],
        updatedAt: "2025-09-25T15:10:21.184Z",
        createdAt: "2025-09-25T15:10:21.184Z"
    },
    {
         // -------------------------------- RESUME-3 --------------------------------
        personal_info: {
            full_name: "Ethan Rodriguez",
            email: "ethan.rodriguez@example.com",
            phone: "+1 512 334 8801",
            location: "Austin, TX, USA",
            linkedin: "https://www.linkedin.com/in/ethanrodriguez",
            website: "https://www.ethansec.dev",
            profession: "Cybersecurity Engineer",
            image: dummy_profile_3
        },
        _id: "93cd8h9f0e1g345678901221",
        userId: "93cd8h9f0e1g345678901222",
        title: "Ethan's Resume",
        public: true,
        professional_summary: "Cybersecurity Engineer with 7+ years of experience securing cloud infrastructure, performing vulnerability assessments, and implementing enterprise security frameworks.",
        skills: ["Network Security", "Python", "SIEM", "AWS Security", "Penetration Testing", "Linux", "Docker", "Incident Response", "Kubernetes Security", "Splunk"],
        experience: [
            {
                company: "SecureNet Solutions",
                position: "Senior Cybersecurity Engineer",
                start_date: "2021-05",
                end_date: "Present",
                description: "Managing cloud security operations and implementing enterprise threat detection systems.",
                is_current: true,
                _id: "93cd8h9f0e1g345678901223"
            },
            {
                company: "CyberShield Technologies",
                position: "Security Analyst",
                start_date: "2017-08",
                end_date: "2021-04",
                description: "Performed penetration testing, incident response, and vulnerability management.",
                is_current: false,
                _id: "93cd8h9f0e1g345678901224"
            }
        ],
        education: [
            {
                institution: "Texas A&M University",
                degree: "B.Sc.",
                field: "Cybersecurity",
                graduation_date: "2017-05",
                gpa: "3.7",
                _id: "93cd8h9f0e1g345678901225"
            }
        ],
        template: "minimal-image",
        accent_color: "#EF4444",
        project: [
            {
                name: "ThreatWatch",
                type: "Security Monitoring Platform",
                description: "Real-time threat detection dashboard integrating SIEM and cloud logs.",
                _id: "93cd8h9f0e1g345678901226"
            },
            {
                name: "VulnScanner Pro",
                type: "Security Assessment Tool",
                description: "Automated vulnerability scanning tool for enterprise networks.",
                _id: "93cd8h9f0e1g345678901227"
            }
        ],
        updatedAt: "2025-09-25T15:26:49.652Z",
        createdAt: "2025-09-25T15:26:49.652Z"
    }
]