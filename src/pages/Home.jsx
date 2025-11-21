import React from "react";
import arjitsingh from "../assets/images/arijitsingh1.png";
import vector210 from "../assets/images/Vector210.png";
import { FaArrowRight } from "react-icons/fa6";

const Home = () => {
  return (
    <div className="w-full py-20  flex flex-col md:flex-row justify-center items-center px-5 md:px-20 gap-10 overflow-x-hidden">
      {/* Role Title */}
      <h1 className="text-8xl relative left-14 z-10">Singers</h1>

      {/* Image Section */}
      <div className="w-[750px] h-fit">
        <div className="flex relative right-10 items-center space-x-10 rounded-lg">
          <div className="w-[600px] h-[600px] border-10 border-red-700 rounded-full overflow-hidden">
            <img
              src={arjitsingh}
              alt="homeimage"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute right-3 bottom-0">
            <img className="w-50 h-110" src={vector210} alt="vector" />
          </div>
        </div>
        <h2 className="text-2xl text-zinc-600 ml-30 pt-8 cursor-pointer">
          Click here to view more
        </h2>
      </div>

      {/* Info Section */}
      <div>
        <p className="text-5xl">
          <span className="text-zinc-500 leading-tight">
            Choose <br /> from{" "}
          </span>
          100+ Categories
        </p>
        <p className="mt-10 flex items-end gap-2 text-xl font-bold bg-linear-to-r from-[#727272ff] via-[#FF8DB9] to-[#F86E42] bg-clip-text text-transparent">
          Explore all categories <FaArrowRight className="text-[#FF8DB9]" />
        </p>
      </div>
    </div>
  );
};

export default Home;
