import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import svg44 from "../assets/Vector26.svg"

const Talentedfolks = () => {
  return (
    <div className="w-full  relative overflow-hidden flex  items-center justify-center bg-[#090912] py-20">
      <div
        className="leftcircle absolute -left-80  w-[40%] h-[70%]  rounded-full"
        style={{
          background:
            "linear-gradient(347.09deg, rgba(174, 57, 153, 0.99) -84.11%, rgba(213, 80, 80, 0) 90.68%)",
        }}
      ></div>
      <div className="content w-[85%]   z-10 bg-[#0B0A14]/80  border-t border-r  pb-20 rounded-full backdrop-blur-lg">
        <h1 className="text-6xl relative mt-30 text-center ">
          20+ Talented Folks
        </h1>

        <p className="text-center mt-14 text-xl">
          From passion-driven dedication to impactfulc contribution,
        </p>
        <p className="text-center  text-xl">
          We do it all here. We are growing and will be exicted to hear <br />{" "}
          from you !{" "}
        </p>
        <div className="w-full flex justify-center mt-6">
          <button
            className="text-center flex items-center gap-4  py-3 rounded-4xl px-8 text-xl"
            style={{
              background:
                "linear-gradient(132.67deg, rgba(241, 102, 51, 0.8) -5.44%, rgba(253, 45, 125, 0.8) 101.81%)",
            }}
          >
            Join our team <FaArrowRight className="text-white" />
          </button>

          <div
            className="py-2 bg-gray-800 rounded-full absolute top-40 text-xl backdrop-blur-3xl px-10 left-82 -rotate-25 border border-white"
            style={{
              background:
                "linear-gradient(102.14deg, rgba(255, 255, 255, 0) -44.04%, rgba(255, 255, 255, 0.2) 93.3%, rgba(255, 255, 255, 3) 98.79%)",
            }}
          >
            Fun
          </div>

          <div
            className="py-2 bg-gray-800 rounded-full absolute top-25 text-xl px-10 right-78 rotate-12 border border-white"
            style={{
              background:
                "linear-gradient(102.14deg, rgba(255, 255, 255, 0) -44.04%, rgba(255, 255, 255, 0.2) 93.3%, rgba(255, 255, 255, 3) 98.79%)",
            }}
          >
            Inclusive
          </div>
        </div>

        <div className="">
           <div
            className="py-2 bg-gray-800 rounded-full absolute bottom-0 text-xl px-10 right-55 -rotate-15 border border-white opacity-20 backdrop-blur-2xl"
            style={{
              background:
                "linear-gradient(102.14deg, rgba(255, 255, 255, 0) -44.04%, rgba(255, 255, 255, 0.2) 93.3%, rgba(255, 255, 255, 0) 98.79%)",
            }}
          >
            motivated
          </div>
            <div
            className="py-2 bg-gray-800 rounded-full absolute bottom-0 text-xl px-10 right-98 rotate-10 border border-white opacity-20 backdrop-blur-2xl"
            style={{
              background:
                "linear-gradient(102.14deg, rgba(255, 255, 255, 0) -44.04%, rgba(255, 255, 255, 0.2) 93.3%, rgba(255, 255, 255, 0) 98.79%)",
            }}
          >
            Dynamic
          </div>
            <div
            className="py-2 bg-gray-800 rounded-full absolute bottom-2 text-xl px-10 right-168 -rotate-15 border border-white opacity-20 backdrop-blur-3xl"
            style={{
              background:
                "linear-gradient(102.14deg, rgba(255, 255, 255, 0) -44.04%, rgba(255, 255, 255, 0.2) 93.3%, rgba(255, 255, 255, 0) 98.79%)",
            }}
          >
            Vibrant
          </div>

           <div
            className="py-2 bg-gray-800 rounded-full absolute bottom-2 text-xl px-10 left-152 rotate-10 border border-white opacity-20 backdrop-blur-3xl"
            style={{
              background:
                "linear-gradient(102.14deg, rgba(255, 255, 255, 0) -44.04%, rgba(255, 255, 255, 0.2) 93.3%, rgba(255, 255, 255, 0) 98.79%)",
            }}
          >
            United
          </div>
           <div
            className="py-2 bg-gray-800 rounded-full absolute bottom-2 text-xl px-10 left-75 -rotate-12 border border-white opacity-20 backdrop-blur-3xl"
            style={{
              background:
                "linear-gradient(102.14deg, rgba(255, 255, 255, 0) -44.04%, rgba(255, 255, 255, 0.2) 93.3%, rgba(255, 255, 255, 0) 98.79%)",
            }}
          >
            Collaborative
          </div>
           <div
            className="py-2 bg-gray-800 rounded-full absolute bottom-2 text-xl px-10 left-35 rotate-19 border border-white opacity-20 backdrop-blur-3xl"
            style={{
              background:
                "linear-gradient(102.14deg, rgba(255, 255, 255, 0) -44.04%, rgba(255, 255, 255, 0.2) 93.3%, rgba(255, 255, 255, 0) 98.79%)",
            }}
          >
            Focused
          </div>

          <div className="text-[#FF71A7] flex gap-4  absolute top-20 -rotate-20 left-65 text-2xl">We are the team of  <img className="mt-5" src={svg44} alt="svg" />   </div>
        </div>
      </div>
      <div
        className="rightcircle absolute -right-80 w-[40%] h-[70%]  rounded-full"
        style={{
          background:
            "linear-gradient(167.09deg, rgba(204, 83, 163, 0.99) -84.11%, rgba(213, 80, 80, 0) 90.68%)",
        }}
      ></div>


    </div>
  );
};

export default Talentedfolks;
