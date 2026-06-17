import React from 'react'

const Footer = () => {
    return (
        <footer className="flex flex-col items-center justify-around w-full py-16 text-sm bg-linear-to-r from-green-200/40 via-white to-green-200/40 text-gray-800/70 mt-40">
        
                <img src='/tailr_logo.svg' className='w-36'/>
                <p className="mt-4 text-center">
                    Copyright © 2026 
                    <a href="https://prebuiltui.com"> Tailr</a>
                </p>

                <div className="flex items-center gap-4 mt-6">
                    <a href="#" className="font-medium text-gray-800 hover:text-black transition-all">
                        Brand Guidelines
                    </a>
                    <div className="h-4 w-px bg-black/20"></div>
                    <a href="#" className="font-medium text-gray-800 hover:text-black transition-all">
                        Trademark Policy
                    </a>
                </div>
            </footer>
    )
}

export default Footer