import React from "react";
import Movix from "../assets/projects/movix.png";
import CaptainTaxi from "../assets/projects/captainTaxi.png";

const Work = () => {
    return (
        <div
            name="work"
            className="bg-[#0a192f]  w-full md:h-screen text-gray-300"
        >
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-[#FE904C]">
                        Work
                    </p>
                    <p className="py-6 ">Check out some of my recent work</p>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <div
                        style={{ backgroundImage: `url(${Movix})` }}
                        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center
                         mx-auto content-div"
                    >
                        <div className="opacity-0 group-hover:opacity-100 transition duration-300">
                            <span className="text-2xl font-bold text-white tracking-wider">
                                Movie DB Website
                            </span>
                            <div className="pt-8 text-center">
                                <a
                                    href="https://movix-rho-ecru.vercel.app/"
                                    target="_blank"
                                >
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                        Demo
                                    </button>
                                </a>
                                <a
                                    href="https://github.com/qasimroy/movix"
                                    target="_blank"
                                >
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{ backgroundImage: `url(${CaptainTaxi})` }}
                        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center
                         mx-auto content-div"
                    >
                        <div className="opacity-0 group-hover:opacity-100  transition duration-300">
                            <span className="text-2xl font-bold text-white tracking-wider">
                                Captain Taxi Website
                            </span>
                            <div className="pt-8 text-center">
                                <a href="https://captain.taxi/" target="_blank">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                        Demo
                                    </button>
                                </a>
                                <a
                                    href="https://github.com/qasimroy/captaintaxi.github.io"
                                    target="_blank"
                                >
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Work;
