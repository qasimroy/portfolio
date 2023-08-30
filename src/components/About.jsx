import React from "react";

const About = () => {
    return (
        <div
            name="about"
            className="bg-[#0a192f] w-full h-screen text-gray-300"
        >
            <div className="flex flex-col justify-center items-center w-full h-full">
                <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
                    <div className="sm:text-right pb-8 pl-4">
                        <p className="text-4xl font-bold inline border-b-4 border-[#FE904C]">
                            About
                        </p>
                    </div>
                    <div></div>
                </div>
                <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
                    <div>
                        <p className="sm:text-right text-4xl font-bold">
                            Hi, I'm Qasim, nice to meet you. Please take a look
                            around.
                        </p>
                    </div>
                    <div>
                        <p>
                            I am a Front-End Developer known for crafting
                            top-notch responsive web designs that meet client
                            needs. With a sharp design sense and proficiency in
                            Front-End Technologies, I ensure seamless, visually
                            pleasing user experiences. A dedicated learner, I
                            actively pursue new skills and technologies to
                            enhance my work.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
