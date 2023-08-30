import React from "react";
import HTML from "../assets/html5.png";
import Bootstrap from "../assets/bootstrap.png";
import CSS from "../assets/css3.png";
import JS from "../assets/js.png";
import Laravel from "../assets/laravel.png";
import ReactIcon from "../assets/react.png";
import Tailwind from "../assets/tailwind.png";
import GitHub from "../assets/github.png";

const Skills = () => {
    return (
        <div name="skills" className="bg-[#0a192f]  w-full  text-gray-300">
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div>
                    <p className="text-4xl font-bold inline border-b-4  border-[#FE904C]">
                        Skills
                    </p>
                    <p className="py-4">
                        These are the technologies I've worked with
                    </p>
                </div>
                <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
                    <div className="shadow-md rounded shadow-[#040c16] hover:scale-110 duration-500">
                        <img
                            className="w-20 mt-3 mx-auto"
                            src={HTML}
                            alt="HTML icon"
                        />
                        <p className="my-4">HTML</p>
                    </div>
                    <div className="shadow-md rounded shadow-[#040c16] hover:scale-110 duration-500">
                        <img
                            className="w-20 mt-3 mx-auto"
                            src={CSS}
                            alt="CSS icon"
                        />
                        <p className="my-4">CSS</p>
                    </div>
                    <div className="shadow-md rounded shadow-[#040c16] hover:scale-110 duration-500">
                        <img
                            className="w-20 mt-3 mx-auto"
                            src={Bootstrap}
                            alt="Bootstrap icon"
                        />
                        <p className="my-4">Bootstrap</p>
                    </div>
                    <div className="shadow-md rounded shadow-[#040c16] hover:scale-110 duration-500">
                        <img
                            className="w-20 mt-3 mx-auto"
                            src={Tailwind}
                            alt="Tailwind icon"
                        />
                        <p className="my-4">Tailwind</p>
                    </div>
                    <div className="shadow-md rounded shadow-[#040c16] hover:scale-110 duration-500">
                        <img
                            className="w-20 mt-3 mx-auto"
                            src={JS}
                            alt="JS icon"
                        />
                        <p className="my-4">JavaScript</p>
                    </div>
                    <div className="shadow-md rounded shadow-[#040c16] hover:scale-110 duration-500">
                        <img
                            className="w-20 mt-3 mx-auto"
                            src={ReactIcon}
                            alt="React icon"
                        />
                        <p className="my-4">React</p>
                    </div>
                    <div className="shadow-md rounded shadow-[#040c16] hover:scale-110 duration-500">
                        <img
                            className="w-20 mt-3 mx-auto"
                            src={Laravel}
                            alt="Laravel icon"
                        />
                        <p className="my-4">Laravel</p>
                    </div>
                    <div className="shadow-md rounded shadow-[#040c16] hover:scale-110 duration-500">
                        <img
                            className="w-20 mt-3 mx-auto"
                            src={GitHub}
                            alt="GitHub icon"
                        />
                        <p className="my-4">GitHub</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
