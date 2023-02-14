import React from "react";

export default function Navbar() {
    return(
        <header className="bg-web-800 md:sticky top-0 z-10">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                
                <p className="title-font font-medium text-web-900 text-xl mb-4 md:mb-0">
                    Kendrick McAdams
                </p>
                <nav className="overflow-hidden text-web-200 md:ml-auto md:mr-4 md:py-0 md:pl-4 md:border-1 md:border-gray-700 flex flex-wrap items-center text-lg justify-center">
                    <a href="#about" className="mr-5 hover:text-web-100">
                        About Me
                    </a>
                    <a href="#projects" className="mr-5 hover:text-web-100">
                        Past Work
                    </a>
                    <a href="#skills" className="mr-5 hover:text-web-100">
                        Skills
                    </a>
                    <a href="#contact" className="mr-5 hover:text-web-100">
                        Hire Me
                    </a>
                    <a href="https://drive.google.com/file/d/1M83SPBtl806hbCE7uBBReJqvkz99LFG2/view?usp=sharing" className="mr-1 hover:text-web-100" target="_blank" rel="noreferrer">
                        Resume
                    </a>
                </nav>
            </div>
        </header>
    );
}