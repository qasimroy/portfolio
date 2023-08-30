import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
    return (
        <div name="home" className="bg-[#0a192f] w-full h-screen">
            <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full ">
                <p className="text-[#FE904C]">Hi, My name is</p>
                <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
                    Muhammad Qasim
                </h1>
                <h1 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
                    I'm a Front-End Developer.
                </h1>
                <p className="text-[#8892b0] py-4 max-w-[700px]">
                    I'm A Front-End developer specializing in building
                    exceptional digital experiences. Currently, I'm focused on
                    developing responsive front-end designs of web applications.
                </p>
                <div>
                    <button
                        className="text-white border-2 px-6 group py-3 my-2 flex items-center hover:bg-[#FE904C]
                     hover:border-[#FE904C] rounded-lg"
                    >
                        View Work
                        <span className=" group-hover:rotate-90 duration-300">
                            <HiArrowNarrowRight className="ml-3 " />
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;
