import React from "react";

const Maggiecard = ({ title1, title2, img, positionClass }) => {
  return (
    <div className={`flex w-fit items-center gap-20 text-white group cursor-pointer ${positionClass}`}>
      
      <div className="text-gray-500 transition-all duration-500 group-hover:text-white">
        <h1 className="text-4xl">{title1}</h1>
        <h1 className="text-4xl">{title2}</h1>
      </div>

      <div
        className="
          relative w-[320px] rounded-2xl overflow-hidden
          transition-all duration-500 
          group-hover:scale-110   
          group-hover:-rotate-6     
          rotate-12
        "
      >
        <img
          src={img}
          alt="maggie"
          className="
            w-full h-full object-cover
            transition-all duration-500
            opacity-50 group-hover:opacity-100
            group-hover:rotate-0     
          "
        />

        <div
          className="
            absolute inset-0 bg-black/50
            transition-all duration-700 
            group-hover:bg-transparent
          "
        ></div>
      </div>
    </div>
  );
};

export default Maggiecard;
