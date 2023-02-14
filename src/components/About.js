
export default function About() {
    return(
        <section id="about" className="bg-web-700">
            <div className="w-screen text-center mb-10">
                <h1 className="title-font text-center sm:text-7xl text-5xl font-medium text-web-300 mb-6">
                    About me
                </h1>
            </div>
            <div className="mx-auto grid md:grid-cols-2 grid-cols-1 gap-6 place-items-center xl:w-1/2 w-3/4 mb-12">
                <img className="rounded"
                alt="pictureofMe"
                src="./mePic.jpg"
                />
                <div className="">
                    <p className="text-web-100 align-middle">Welcome to my programming portfolio! 
                    I am a passionate and self-driven software developer who has been creating software applications for years. My expertise 
                    lies in developing both web and software applications and am proficient in technologies such as Python, Java, Javascript, 
                    HTML, and CSS. I strive to create high-quality, scalable, and user-friendly applications that solve real-world problems.
                    Whether I am on a team or working independently, I am committed to clear communication, delivering projects on time, and 
                    exceeding expectations. Take a look at my portfolio to see some of my projects and how I can bring value to your next project!
                    </p>
                </div>
            </div>
        </section>
    );
}