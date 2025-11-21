import { useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import meet from "../assets/images/meet.png";
import meet2 from "../assets/images/katrina.png";
import meet3 from "../assets/images/zakirkhan.png";
import meet4 from "../assets/images/arjitsingh.png";
import meet5 from "../assets/images/maniesh.png";

const teams = [
  {
    title: "Tech Titans",
    members: 5,
    desc: "The artists behind the visuals. These design superheroes bring ideas to life, painting our projects with creativity and imagination.",
    img: meet,
  },
  {
    title: "Code Warriors",
    members: 7,
    desc: "Innovators who write powerful code and build awesome digital products.",
    img: meet2,
  },
  {
    title: "Marketing Ninjas",
    members: 4,
    desc: "The people who craft ideas and spread our brand across the world.",
    img: meet3,
  },
  {
    title: "Tech Titans",
    members: 5,
    desc: "The artists behind the visuals. These design superheroes bring ideas to life, painting our projects with creativity and imagination.",
    img: meet4,
  },
  {
    title: "Code Warriors",
    members: 7,
    desc: "Innovators who write powerful code and build awesome digital products.",
    img: meet5,
  },
 
];

const Meet = () => {
  const [index, setIndex] = useState(0);

  const previous = () => {
    setIndex((prev) => (prev === 0 ? teams.length - 1 : prev - 1));
  };

  const next = () => {
    setIndex((prev) => (prev === teams.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full pb-60 bg-[#090912] text-white py-20 flex flex-col items-center overflow-hidden relative">

      {/* Heading */}
      <h1 className="text-4xl font-semibold mb-34 mt-14">Meet Our Starclinch Squads</h1>

      {/* Big Background Circle */}
      <div className="w-full flex justify-center h-[800px] overflow-hidden absolute top-105 left-0 ">
        <div
          className="w-[90%] h-[800px] bg-[#090912]/40 opacity-60 rounded-t-full 
          border-t-3 border-l border-r border-gray-700 
          shadow-[inset_0_0_80px_rgba(59,130,246,0.5)]"
        ></div>
      </div>

      <div className="relative flex items-center justify-center w-full ">

        {/* LEFT faded circle  */}
        <div className="absolute left-[10%] top-full opacity-40 scale-100 rounded-full overflow-hidden w-[200px] h-[200px]  hidden md:flex">
          <img
            src={teams[(index - 1 + teams.length) % teams.length].img}
            className="w-full h-full  object-cover"
          />
        </div>
        <div className="absolute left-[2%] top-[220%] opacity-30 scale-100 rounded-full overflow-hidden w-[180px] h-[180px]  hidden md:flex">
          <img
            src={teams[(index - 2 + teams.length) % teams.length].img}
            className="w-full h-full object-cover"
          />
        </div>

        {/* RIGHT faded circle  */}
        <div className="absolute right-[10%] top-full opacity-40 scale-100 rounded-full overflow-hidden w-[200px] h-[200px] hidden md:flex">
          <img
            src={teams[(index + 1) % teams.length].img}
            className="w-full h-full object-cover"
          />
        </div>
         <div className="absolute right-[2%] top-[210%] opacity-30 scale-100 rounded-full overflow-hidden w-[200px] h-[200px] hidden md:flex">
          <img
            src={teams[(index + 2) % teams.length].img}
            className="w-full h-full object-cover"
          />
        </div>

        {/* CENTER IMAGE */}
        <div className="rounded-4xl overflow-hidden w-[220px] h-[220px] md:w-[250px] md:h-[250px] shadow-xl transition-all duration-500">
          <img src={teams[index].img} className="w-full h-full object-cover" />
        </div>

        {/* Left Arrow */}
        <button
          onClick={previous}
          className="absolute left-0 md:left-[30%] p-3 bg-white/10 hover:bg-white/20 rounded-full transition"
        >
          <FiArrowLeft size={22} />
        </button>

        {/* Right Arrow */}
        <button
          onClick={next}
          className="absolute right-0 md:right-[30%] p-3 bg-white/10 hover:bg-white/20 rounded-full transition"
        >
          <FiArrowRight size={22} />
        </button>
      </div>

      {/* Members Tag */}
      <div className="mt-16 bg-linear-to-r from-green-600 to-green-400 px-6 py-2 rounded-full text-lg font-medium shadow-md">
        {teams[index].members} Members
      </div>

      {/* Title */}
      <h2 className="text-3xl font-semibold mt-10">{teams[index].title}</h2>

      {/* Description */}
      <p className="text-gray-300 text-center mt-6 max-w-xl leading-relaxed">
        {teams[index].desc}
      </p>

      {/* CTA */}
      <button className="mt-6 text-green-400 hover:text-green-500 flex items-center gap-2">
        Our design team is growing. Apply Now →
      </button>

    </div>
  );
};

export default Meet;
