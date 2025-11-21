import React, { useState } from "react";
import img1 from "../assets/images/katrina.png";
import img2 from "../assets/images/arjitsingh.png";
import img3 from "../assets/images/maniesh.png";
import img4 from "../assets/images/zakirkhan.png";

const Album = () => {
  const [active, setActive] = useState(0);         
  const [tab, setTab] = useState("photos");       

  return (
    <div className="relative w-full  py-10 my-10 text-white">

      <div className="w-full h-[700px] overflow-hidden absolute top-0 left-0 z-0">
        <div className="w-full h-[1000px] bg-[#090912] opacity-60 rounded-t-full border-t-3 border-l border-r border-gray-700"></div>
      </div>

      <div className="flex justify-center pt-20 relative z-10">
        <div className="bg-[#1C1C2E] p-3 rounded-full flex gap-6 shadow-xl">

          <button
            onClick={() => setTab("photos")}
            className={`px-10 py-3 rounded-full font-semibold transition-all duration-300
              ${tab === "photos" ? "bg-white text-black" : "text-white"}`}
          >
            Photos
          </button>

          <button
            onClick={() => setTab("videos")}
            className={`px-10 py-3 rounded-full font-semibold transition-all duration-300
              ${tab === "videos" ? "bg-white text-black" : "text-white"}`}
          >
            Videos
          </button>

        </div>
      </div>

      <div className="grid grid-cols-4 gap-10 px-75 mt-25 relative z-10">

        <div className="w-[220px] h-[220px] border-2 border-[#69625F] rounded-t-full rounded-bl-full overflow-hidden shadow-lg">
          <img src={img1} className="w-full h-full object-cover" />
        </div>

        <div className="w-[220px] h-[220px] border-2 border-[#69625F] rounded-xl overflow-hidden shadow-lg">
          <img src={img2} className="w-full h-full object-cover" />
        </div>

        <div className="w-[220px] h-[220px] border-2 border-[#69625F] rounded-t-full rounded-bl-full overflow-hidden shadow-lg">
          <img src={img1} className="w-full h-full object-cover" />
        </div>

        <div className="w-[220px] h-[220px] border-2 border-[#69625F] rounded-xl overflow-hidden shadow-lg">
          <img src={img2} className="w-full h-full object-cover" />
        </div>

        <div className="w-[220px] h-[220px] border-2 border-[#69625F] rounded-xl overflow-hidden shadow-lg">
          <img src={img3} className="w-full h-full object-cover" />
        </div>

        <div className="w-[220px] h-[220px] border-2 border-[#69625F] rounded-xl overflow-hidden shadow-lg">
          <img src={img4} className="w-full h-full object-cover" />
        </div>

        <div className="w-[220px] h-[220px] border-2 border-[#69625F] rounded-xl overflow-hidden shadow-lg">
          <img src={img3} className="w-full h-full object-cover" />
        </div>

        <div className="w-[220px] h-[220px] border-2 border-[#69625F] rounded-xl overflow-hidden shadow-lg">
          <img src={img4} className="w-full h-full object-cover" />
        </div>

      </div>

      <div className="relative z-10 flex justify-center mt-16">
        <div className="flex gap-6">

          {[0, 1, 2, 3].map((item) => (
            <div
              key={item}
              onClick={() => setActive(item)}
              className={`
                h-1 rounded-full cursor-pointer transition-all duration-300
                ${active === item ? "w-24 bg-white" : "w-16 bg-gray-500"}
              `}
            ></div>
          ))}

        </div>
      </div>

    </div>
  );
};

export default Album;
