"use client";

import React from "react";
import { ReactTyped } from "react-typed";

const Home = () => {
  return (
    <div className=" bg-black text-white h-screen text-center flex justify-center items-center">
      <div className="mb-20 lg:mb-0">
        <h1 className="text-3xl my-8 font-Kanit italic font-bold md:text-6xl lg:text-7xl lg:my-10 ">
          Welcome to Ani<span className="text-yellow-400">Moon</span>
        </h1>
        <p className="font-Kanit text-xl md:text-4xl">
          Here you can find{" "}
          <ReactTyped
            strings={["Animes", "Mangas", "Characters"]}
            typeSpeed={60}
            backSpeed={60}
            loop
          />
        </p>
      </div>
    </div>
  );
};

export default Home;
