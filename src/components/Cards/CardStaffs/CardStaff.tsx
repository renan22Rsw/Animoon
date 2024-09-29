import Image from "next/image";
import Link from "next/link";
import React from "react";

interface StaffProps {
  id: number;
  name: string;
  image: string;
  occupation: string;
}

const CardStaff = ({ id, name, image, occupation }: StaffProps) => {
  return (
    <div className=" bg-[#1C1C1C] h-[80px]  w-[350px] m-4 rounded-md lg:w-[381px] 2xl:w-[380px]  2xl:h-[70px]">
      <Link href={`/staffs/${id}`} className="flex items-center text-xs">
        <Image
          className="h-20 w-[60px] rounded-sm 2xl:h-[70px] 2xl:w-[55px] "
          src={image}
          alt="Card-image-staffs"
          width={50}
          height={60}
          priority={true}
        />
        <span className="grid p-2 gap-y-6  grid-rows-2 items-center">
          <h4>{name}</h4>
          <p>{occupation + ""}</p>
        </span>
      </Link>
    </div>
  );
};

export default CardStaff;
