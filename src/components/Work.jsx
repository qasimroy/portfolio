import React from "react";
import Movix from "../assets/projects/movix.png";
import CaptainTaxi from "../assets/projects/captainTaxi.png";
import BestBaby from "../assets/projects/bestBaby.png";
import QuickEstimations from "../assets/projects/quickEstimation.png";
import StockManager from "../assets/projects/stockManager.png";
import MHMUCSP from "../assets/projects/mhmucsp.png";

const projects = [
  {
    title: "Movie DB Website",
    img: Movix,
    demo: "https://movix-rho-ecru.vercel.app/",
    code: "https://github.com/qasimroy/movix",
  },
  {
    title: "Captain Taxi Website",
    img: CaptainTaxi,
    demo: "https://captain.taxi/",
    code: "https://github.com/qasimroy/captaintaxi.github.io",
  },
  // {
  //   title: "Supra Partners Website",
  //   img: SupraPartners,
  //   demo: "https://supra-partners.vercel.app/",
  //   code: "https://github.com/qasimroy/supra-partners",
  // },
  {
    title: "Quick Estimation LLC Website",
    img: QuickEstimations,
    demo: "https://quickestimations.com/",
    code: "https://github.com/qasimroy/quick-estimations",
  },
  {
    title: "Stock Management Solution",
    img: StockManager,
    demo: "https://stock-management-gilt.vercel.app/",
    code: "https://github.com/qasimroy/stock-management",
  },
  {
    title: "Auto Spare Parts Website & Dashboard",
    img: MHMUCSP,
    demo: "https://mhmucsp.com/",
    code: "https://github.com/qasimroy/car-gear-galaxy",
  },
  {
    title: "Best Baby Org Website",
    img: BestBaby,
    demo: "https://bestbaby-parenting-hub.vercel.app/",
    code: "https://github.com/qasimroy/bestbaby-parenting-hub",
  },
];

const Work = () => (
  <div name="work" className="bg-[#0a192f] w-full md:h-screen text-gray-300">
    <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center h-full">
      <div className="pb-8">
        <p className="text-4xl font-bold inline border-b-4 border-[#FE904C]">
          Work
        </p>
        <p className="py-6">Check out some of my recent work</p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {projects.map(({ title, img, demo, code }) => (
          <div
            key={title}
            style={{ backgroundImage: `url(${img})` }}
            className="shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center content-div"
          >
            <div className="opacity-0 group-hover:opacity-100 transition duration-300 text-center">
              <span className="text-2xl font-bold text-white">{title}</span>
              <div className="pt-8">
                <a href={demo} target="_blank" rel="noreferrer">
                  <button className="px-4 py-3 m-2 bg-white text-gray-700 font-bold rounded-lg">
                    Demo
                  </button>
                </a>
                <a href={code} target="_blank" rel="noreferrer">
                  <button className="px-4 py-3 m-2 bg-white text-gray-700 font-bold rounded-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Work;
