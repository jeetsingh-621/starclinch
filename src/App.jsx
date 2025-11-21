// App.jsx
import React from "react";
import Home from "./pages/Home";
import Album from "./pages/Album";
import Maggie from "./pages/Maggie";
import Meet from "./pages/Meet";
import Recentshows from "./pages/Recentshows";
import Talentedfolks from "./pages/Talentedfolks";

const App = () => {
  return (
    <div className="bg-[#080810] font-['roboto'] text-white w-full max-w-[1920px] mx-auto overflow-x-hidden">
      <section className="w-full flex justify-center items-center">
        {" "}
        <Home />{" "}
      </section>
      <section className=" w-full flex justify-center items-center">
        <Album />
      </section>

      <section className=" w-full flex justify-center items-center">
        <Maggie />
      </section>

      <section className=" w-full flex justify-center items-center">
        <Meet />
      </section>

      <section className=" w-full flex justify-center items-center">
        <Recentshows />
      </section>

      <section className=" w-full flex justify-center items-center">
        <Talentedfolks />
      </section>
    </div>
  );
};

export default App;
