import React from "react";
import SubTitles from "../Titles/SubTitles";

const Description = ({ description }: { description: string }) => {
  return (
    <div className="md:hidden  my-8 ">
      <SubTitles>Description</SubTitles>
      <div className="bg-[#1C1C1C] w-[90%] mx-auto p-8 ">
        <p className="text-white text-sm">{description}</p>
      </div>
    </div>
  );
};

export default Description;
