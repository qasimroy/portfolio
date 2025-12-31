import React from "react";
import HTML from "../assets/html5.png";
import CSS from "../assets/css3.png";
import Bootstrap from "../assets/bootstrap.png";
import Tailwind from "../assets/tailwind.png";
import JS from "../assets/js.png";
import ReactIcon from "../assets/react.png";
import Laravel from "../assets/laravel.png";
import GitHub from "../assets/github.png";
import Lovable from "../assets/lovable.webp";
import Vercel from "../assets/vercel.png";
import Chatgpt from "../assets/chatgpt.webp";
import Claude from "../assets/Claude.webp";

const skills = [
  { name: "HTML", icon: HTML },
  { name: "CSS", icon: CSS },
  { name: "Bootstrap", icon: Bootstrap },
  { name: "Tailwind", icon: Tailwind },
  { name: "JavaScript", icon: JS },
  { name: "React", icon: ReactIcon },
  { name: "Laravel", icon: Laravel },
  { name: "GitHub", icon: GitHub },
  { name: "Lovable", icon: Lovable },
  { name: "V0 by Vercel", icon: Vercel },
  { name: "Chatgpt", icon: Chatgpt },
  { name: "Claude", icon: Claude },
];

const Skills = () => (
  <div name="skills" className="bg-[#0a192f] w-full text-gray-300">
    <div className="max-w-[1000px] mx-auto p-4">
      <p className="text-4xl font-bold inline border-b-4 border-[#FE904C]">
        Skills
      </p>
      <p className="py-4">Technologies I've worked with</p>

      <div className="grid grid-cols-2 sm:grid-cols-6 gap-4 text-center py-8">
        {skills.map(({ name, icon }) => (
          <div
            key={name}
            className="shadow-md rounded shadow-[#040c16] hover:scale-110 duration-500"
          >
            <img src={icon} alt={name} className="w-20 mt-3 mx-auto" />
            <p className="my-4">{name}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Skills;
