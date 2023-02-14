
import React from "react";
import { skills } from "../data"

export default function Skills() {
    return(
        <section id="skills" className="bg-web-700">
            <div className="container px-5 py-10 mx-auto text-center lg:px-30 min-h-screen">
                <div className="flex flex-col w-full mb-20">
                    
                    <h1 className="text-web-300 title-font float-left sm:text-7xl text-5xl mb-10 font-medium">
                        My Skills
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-7 text-web-100">
                        In today's rapidly evolving tachnological landscape, it's essential to 
                        have a diverse set of skills to say ahead of the curve. I am proud to say that 
                        I have honed a wide range of technical abilities that allow me to tackle any 
                        project that comes my way. Here are some of the skills that allow me to deliver 
                        results that exceed expectations!
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 lg:w-4/5 mx-auto sm:mb-2 place-content-stretch">
                    {skills.map((skill) => (
                        <div key={skill} className="p-2 md:w-full sm:w-3/4 w-5/6 mx-auto">
                            <div className="border-web-800 rounded flex p-4 h-full transition-colors ease-in-out delay-25 duration-200 transform bg-web-600 hover:bg-web-500">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#50C878" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                                </svg>
                                <span className="title-font font-medium text-web-900 pl-4">
                                    {skill}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}