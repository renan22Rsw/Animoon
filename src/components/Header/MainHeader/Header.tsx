import TextArea from "@/components/TextArea/TextArea";
import Image from "next/image";
import React from "react";

interface HeaderProps {
  title: string;
  description: string;
  coverImage: string;
}

const Header = ({ title, description, coverImage }: HeaderProps) => {
  return (
    <div className="text-white bg-[#1C1C1C] py-4 lg:flex 2xl:px-20  ">
      <div className=" p-4 md:flex  md:items-center md:w-3/4 lg:w-full lg:flex lg:items-center">
        <Image
          width={300}
          height={300}
          layout="fixed"
          quality={100}
          src={coverImage}
          alt="Header-Image"
          style={{ height: "auto", width: "230px" }}
          priority={true}
          className="rounded-md "
        />

        {/* main versions */}
        <div className=" px-4 hidden md:block xl:w-2/4 ">
          <h1 className="py-4 text-xl">{title}</h1>
          <TextArea>{description}</TextArea>
        </div>
      </div>
      {/* cell versions */}
      <div className="w-4/5 px-4 md:hidden">
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default Header;
