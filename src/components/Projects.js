
import React from "react";
import { projects } from "../data";

export default function Projects() {
    return (
        <section id="projects" className="bg-web-700">
            <div className="container px-5 py-10 mx-auto text-center min-h-screen">
                <div className="flex flex-col mb-20">
                    
                    <h1 className="text-web-300 title-font float-left sm:text-7xl text-5xl mb-10 font-medium">
                        Things I've Built
                    </h1>
                    <p className="text-web-100 lg:w-2/3 mx-auto leading-7">
                        I am proud of the projects I have worked on and the journeys that went into the making of them! 
                        In this section, you will find some of my most notable projects that showcase my technical abilities and 
                        creativity. From developing web applications to solving problems with command line programs, I am always 
                        looking for new and exciting challenges to sink my teeth into!
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-2 w-full mx-auto content-center place-items-center">
                    {projects.map((project) => (
                        <a
                            href={project.link}
                            key={project.image}
                            className="">
                            <div className="flex relative min-h-[20rem] max-w-[27rem]">
                                <img
                                    alt="gallery"
                                    className="rounded absolute inset-0 w-full h-full object-cover object-center"
                                    src={project.image}
                                />
                                <div className="rounded bg-web-600 border-web-800 px-10 py-12 relative z-9 w-full border-4 transition-opacity duration-2600 ease-in opacity-0 hover:opacity-100">
                                    <h2 className="tracking-wide text-sm title-font font-medium text-web-900 mb-1">
                                        {project.subtitle}
                                    </h2>
                                    <h1 className="title-font text-lg font-medium text-web-200 mb-3">
                                        {project.title}
                                    </h1>
                                    <p className="leading-relaxed text-web-100">
                                        {project.description}
                                    </p>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
