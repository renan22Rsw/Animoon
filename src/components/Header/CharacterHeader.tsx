import Image from "next/image";
import React from "react";
import TextArea from "../TextArea/TextArea";

interface CharacterHeaderProps {
  name: string;
  nativeName: string;
  alternativeName?: string[];
  age: string;
  image: string;
  gender: string;
  month: number;
  day: number;
  bloodType: string;
  hometown?: string;
  yearsActive?: number[];
  description: string;
}

const CharacterHeader = ({
  name,
  nativeName,
  alternativeName,
  age,
  image,
  gender,
  month,
  day,
  bloodType,
  hometown,
  yearsActive,
  description,
}: CharacterHeaderProps) => {
  return (
    <div>
      <div className="bg-[#1C1C1C] pb-[30px] pt-[20px] h-[200px] text-[#9FADB3]  ">
        <div className="max-w-[1200px] hidden m-8 md:flex md:items-center lg:mx-10 2xl:mx-auto">
          <Image
            width={130}
            height={130}
            src={image}
            alt="Anime-Image"
            style={{ height: "345px", width: "230px" }}
            priority={true}
            className="rounded-md "
          />
          <div className="my-4 mx-8  h-[300px]">
            <h2 className="text-[#ADC0D2] text-3xl font-bold py-2">{name}</h2>
            <p className="md:text-sm lg:text-lg">
              {nativeName
                ? nativeName
                : ""
                ? alternativeName
                : alternativeName
                ? nativeName && alternativeName
                : nativeName + "" + alternativeName}
            </p>

            <div className="relative top-[100px]">
              {month || day ? <h4>Birthday: {month + "/" + day}</h4> : ""}

              {age ? <h4>Age: {age}</h4> : ""}

              {gender ? <h4>Gender: {gender} </h4> : ""}

              {yearsActive
                ? yearsActive.map((yearActive, index) => (
                    <h4 key={index}>Years active: {yearActive}</h4>
                  ))
                : ""}
              {hometown ? <h4>Hometown: {hometown} </h4> : ""}
              {bloodType ? <h4>Blood Type: {bloodType}</h4> : ""}
              <TextArea>{description}</TextArea>
            </div>
          </div>
        </div>

        <div className="text-center px-4 md:hidden  ">
          <h2 className="text-[#ADC0D2] text-2xl font-bold py-2">{name}</h2>
          <p>
            {nativeName
              ? nativeName
              : ""
              ? alternativeName
              : alternativeName
              ? nativeName && alternativeName
              : nativeName + "" + alternativeName}
          </p>
          <div className="flex justify-center p-4  my-8">
            <Image
              width={130}
              height={130}
              src={image}
              alt="Anime-Image"
              style={{ height: "345px", width: "230px" }}
              priority={true}
              className="rounded-md "
            />
          </div>
          <div className="text-start mx-4">
            {month || day ? <h4>Birthday: {month + "/" + day}</h4> : ""}
            {age ? <h4>Age: {age}</h4> : ""}
            {gender ? <h4>Gender: {gender} </h4> : ""}
            {yearsActive
              ? yearsActive.map((yearActive, index) => (
                  <h4 key={index}>Years active: {yearActive}</h4>
                ))
              : ""}
            {hometown ? <h4>Hometown: {hometown} </h4> : ""}
            {bloodType ? <h4>Blood Type: {bloodType}</h4> : ""}

            <TextArea>{description}</TextArea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterHeader;
