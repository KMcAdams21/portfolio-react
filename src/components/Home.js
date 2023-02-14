
import React from 'react';

export default function Home() {
    return(
        <section id="home" className="bg-web-700">
            <div className="container mx-auto flex flex-col px-10 py-20 justify-center min-h-screen">
                <div className="w-full flex flex-col sm:h-64 h-40 md:items-start md:text-left mb-0 sm:mb-12 md:mb-12 lg:mb-0 items-center sm:float-left text-center">
                    <h1 className="title-font sm:text-xl text-base mb-2 font-medium text-web-900">Hi, my name is</h1>
                    <h1 className="title-font sm:text-8xl text-5xl mb-4 font-medium text-web-400">Kendrick McAdams</h1>
                    <h1 className="title-font sm:text-4xl text-xl font-medium text-web-300">Software and Web Developer</h1>
                </div>
                <div className="container mx-auto sm:mt-0 mt-4">
                    <p className="sm:text-left text-center sm:text-1l text-2lmb-4 text-web-100">I am a software engineer who loves enriching the world through the digital projects
                        that I create. I specialize in building both web and desktop applications
                        and I am excited to help you with your next idea so that we can make it a reality!
                    </p>
                </div>
                <div className="flex justify-start mt-12 text-center">
                    <a
                    href="#projects"
                    className="inline-flex bg-web-400 hover:bg-web-300 text-web-100 hover:text-black border-0 py-2 px-6 mx-6 focus:outline-none rounded text-m sm:text-lg transition ease-in-out delay-50 hover:scale-110 duration-300"
                    >Check out my projects!
                    </a>
                    <a
                    href="#contact"
                    className="inline-flex bg-web-400 hover:bg-web-300 text-web-100 hover:text-black border-0 py-2 px-6 mx-6 focus:outline-none rounded text-m sm:text-lg transition ease-in-out delay-50 hover:scale-110 duration-300"
                    >Come contact me!
                    </a>
                </div>
            </div>        
        </section>
    );
}