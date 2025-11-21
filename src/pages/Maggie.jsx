import React from "react";
import maggie from "../assets/images/maggie1.png";
import MaggieCard from "../components/maggie/Maggiecard";

const Maggie = () => {
  return (
    <div
      className="
        w-full 
        bg-no-repeat bg-center bg-contain
        pb-60 mt-20
      "
      style={{ backgroundImage: "url('/Vector248.svg')" }}
    >
      <MaggieCard
        title1="Late Night Maggie"
        title2="Party for the boost"
        img={maggie}
        positionClass="pt-25 px-10 ml-40"
      />

      <MaggieCard
        title1="Late Night Maggie"
        title2="Party for the boost"
        img={maggie}
        positionClass="pt-20 px-10 relative top-30 left-140"
      />

      <MaggieCard
        title1="Late Night Maggie"
        title2="Party for the boost"
        img={maggie}
        positionClass="pt-20 px-10 relative top-50 left-50"
      />

      <MaggieCard
        title1="Late Night Maggie"
        title2="Party for the boost"
        img={maggie}
        positionClass="pt-20 px-10 relative top-60 left-120"
      />
    </div>
  );
};

export default Maggie;
