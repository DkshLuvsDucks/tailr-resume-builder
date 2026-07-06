import { Zap } from 'lucide-react';
import React from 'react'
import Title from './Title.jsx';
import { Sparkles, ScanSearch, FileDown } from "lucide-react";

const Features = () => {
    const [isHover, setIsHover] = React.useState(false);
    return (
     <div id='features' className='flex flex-col items-center my-10 scroll-mt-12'>
        <div className="flex items-center gap-2 text-sm text-green-600 bg-green-400/10 border border-green-200 rounded-full px-6 py-1.5">
            <Zap width={14}/>
            <span>Powerful Features</span>
        </div>

        <Title 
            title={"Smarter Resume Building"} 
            description={"Create ATS-friendly resumes with AI-powered writing, smart formatting, and personalized suggestions that help you stand out to recruiters."}
        />

            <div className="flex flex-col md:flex-row items-center justify-center xl:mt-10">
                <img className="max-w-2xl w-full xl:-ml-32" src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/features/group-image-1.png" alt="" />
                <div className="px-4 md:px-0" onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
                    <div className={"flex items-center justify-center gap-6 max-w-md group cursor-pointer"}>
                        <div className={`p-6 group-hover:bg-violet-100 border border-transparent group-hover:border-violet-300  flex gap-4 rounded-xl transition-colors ${!isHover ? 'border-violet-300 bg-violet-100' : ''}`}>
                            <Sparkles className="size-6 text-violet-600" strokeWidth={2} />
                            <div className="space-y-2">
                                <h3 className="text-base font-semibold text-slate-700">AI Resume Writing</h3>
                                <p className="text-sm text-slate-600 max-w-xs">Generate professional resume content tailored to your experience, skills, and target role in seconds.</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-6 max-w-md group cursor-pointer">
                        <div className="p-6 group-hover:bg-green-100 border border-transparent group-hover:border-green-300 flex gap-4 rounded-xl transition-colors">
                            <ScanSearch className="size-6 text-green-600" strokeWidth={2} />
                            <div className="space-y-2">
                                <h3 className="text-base font-semibold text-slate-700">ATS-Friendly Optimization</h3>
                                <p className="text-sm text-slate-600 max-w-xs">Improve your resume with AI suggestions, keyword optimization, and recruiter-friendly formatting.</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-6 max-w-md group cursor-pointer">
                        <div className="p-6 group-hover:bg-orange-100 border border-transparent group-hover:border-orange-300 flex gap-4 rounded-xl transition-colors">
                            <FileDown className="size-6 text-orange-600" strokeWidth={2} />
                            <div className="space-y-2">
                                <h3 className="text-base font-semibold text-slate-700">Ready-to-Share Exports</h3>
                                <p className="text-sm text-slate-600 max-w-xs">Download polished PDF resumes instantly and apply confidently to your dream jobs.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style> */}
        </div>
  )
}

export default Features