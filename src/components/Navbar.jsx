import React, { useState } from "react";
import { FaBars, FaTimes, FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/logo.png";
import Resume from "../assets/CV.pdf";
import { Link } from "react-scroll";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
    return (
        <div className="fixed z-10 w-full h-[80px] bg-[#0a192f] flex justify-between items-center px-4 text-gray-300">
            <div>
                <img src={Logo} alt="Logo" style={{ width: "80px" }} />
            </div>
            <ul className="hidden md:flex ">
                <li>
                    <Link to="home" smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="about" smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li>
                    <Link to="skills" smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li>
                    <Link to="work" smooth={true} duration={500}>
                        Work
                    </Link>
                </li>
                <li>
                    <Link to="contact" smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>
            <div className="md:hidden z-10">
                {!nav ? (
                    <FaBars onClick={handleClick} />
                ) : (
                    <FaTimes onClick={handleClick} />
                )}
            </div>
            <ul
                className={
                    !nav
                        ? "hidden"
                        : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
                }
            >
                <li className="py-6 text-4xl">
                    <Link
                        onClick={handleClick}
                        to="home"
                        smooth={true}
                        duration={500}
                    >
                        Home
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    <Link
                        onClick={handleClick}
                        to="about"
                        smooth={true}
                        duration={500}
                    >
                        About
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    <Link
                        onClick={handleClick}
                        to="skills"
                        smooth={true}
                        duration={500}
                    >
                        Skills
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    <Link
                        onClick={handleClick}
                        to="work"
                        smooth={true}
                        duration={500}
                    >
                        Work
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    <Link
                        onClick={handleClick}
                        to="contact"
                        smooth={true}
                        duration={500}
                    >
                        Contact
                    </Link>
                </li>
            </ul>
            <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
                <ul className="">
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500">
                        <a
                            className="flex justify-between items-center w-full text-gray-300"
                            href="https://www.linkedin.com/in/qasim-roy-061291178/"
                            target="_blank"
                        >
                            LinkedIn <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className="w-[160px] h-[60px] ml-[-100px] flex justify-between items-center hover:ml-[-10px] duration-300 bg-[#333333]">
                        <a
                            className="flex justify-between items-center w-full text-gray-300"
                            href="https://github.com/qasimroy"
                            target="_blank"
                        >
                            GitHub <FaGithub size={30} />
                        </a>
                    </li>
                    <li className="w-[160px] h-[60px] ml-[-100px] flex justify-between items-center hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
                        <a
                            className="flex justify-between items-center w-full text-gray-300"
                            href="mailto:qasimroy5234@gmail.com"
                            target="_blank"
                        >
                            Mail <HiOutlineMail size={30} />
                        </a>
                    </li>
                    <li className="w-[160px] h-[60px] ml-[-100px] flex justify-between items-center hover:ml-[-10px] duration-300 bg-[#565f69]">
                        <a
                            className="flex justify-between items-center w-full text-gray-300"
                            href={Resume}
                            target="_blank"
                        >
                            Resume <BsFillPersonLinesFill size={30} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
