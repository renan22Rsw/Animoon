"use client";

import { useRouter } from "next/navigation";
import React from "react";

const NotFound = () => {
  const router = useRouter();

  return (
    <div className="text-white h-screen flex justify-center items-center">
      <div className="text-center">
        <h1 className=" text-4xl font-bold md:text-5xl lg:text-6xl 2xl:text-7xl">
          404
        </h1>
        <p className="my-2 text-sm capitalize md:text-lg lg:text-xl 2xl:text-3xl">
          the page you were looking for does not exist
        </p>
        <button
          className="my-4 bg-[#FACC15] w-28 p-2 rounded-md text-black font-bold cursor-pointer lg:w-[180px] lg:transition duration-500 lg:hover:scale-110"
          onClick={() => router.back()}
        >
          Go back
        </button>
      </div>
    </div>
  );
};
export default NotFound;
