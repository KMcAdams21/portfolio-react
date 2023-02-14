
export default function Contact() {
    return(
        <section id="contact" className="bg-web-700">
            <div className="container mx-auto flex shrink flex-col gap-5 px-10 py-20 max-h-screen text-center">
                <div className="flex mb-5">
                    <h1 className="text-web-300 title-font sm:text-7xl mx-auto text-5xl mb-6 font-medium">
                        Contact Me!
                    </h1>
                </div>
                <div className="w-full md:w-2/3 lg:w-1/2 mb-10 mx-auto">
                    <p className="text-web-100">
                        Thank you for visiting! If you have any questions or would like to discuss potential projects or 
                        employment opportunities, I would be more than happy to hear from you! Feel free to email me at 
                        mcadams.kendrick@gmail.com or click the button for a shortcut! I am excited to connect and see how 
                        I can bring my skills and experience to your next project or team!
                    </p>
                </div>
                <a
                className="bg-web-500 hover:bg-web-400 rounded hover:text-black border-black flex items-center font-medium w-40 h-16 mx-auto transition ease-in-out delay-50 hover:scale-110 duration-300"
                href="mailto:mcadams.kendrick@gmail.com"
                rel="noopener noreferrer"
                target="_blank"
                >
                    <div className="text-web-100 mx-auto text-xl justify-center align-middle">
                        Send me a Message!
                    </div>
                </a>
            </div>
        </section>
    );
}