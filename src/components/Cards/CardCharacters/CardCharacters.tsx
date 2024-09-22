import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CardCharactersProps {
  id: number;
  name: string;
  image: string;
  role: string;
  voices: {
    id: number;
    name: string;
    image: string;
    language: string;
  }[];
}

const CardCharacters = ({
  name,
  image,
  role,
  voices,
  id,
}: CardCharactersProps) => {
  return (
    <div className="flex justify-between bg-[#1C1C1C] h-[80px] w-[350px] m-4 lg:w-[381px] 2xl:w-[375px]">
      <Link
        href={`/characters/${id}`}
        className="flex items-center text-xs"
        data-testid="character-link"
      >
        <Image
          className="h-25 w-[60px] rounded-sm 2xl:h-[80px] 2xl:w-[70px] "
          src={image}
          alt="Card-image-character"
          width={60}
          height={60}
          priority={true}
          style={{ width: "54px", height: "auto" }}
        />
        <span className="p-2 grid items-center w-[180px]  gap-y-6">
          <h4>{name}</h4>
          <p>{role.charAt(0).toUpperCase() + role.slice(1).toLowerCase()}</p>
        </span>
      </Link>

      <Link
        href={`/staffs/${voices[0]?.id}`}
        className="flex items-center text-xs"
        data-testid="voice-link"
      >
        <span className=" p-2 grid  items-center w-[180px] gap-y-6 text-end">
          <h4>{voices[0]?.name}</h4>
          <p>{voices[0]?.language}</p>
        </span>
        {voices[0]?.image && (
          <Image
            className="h-20 w-[60px] rounded-sm 2xl:h-[80px] 2xl:w-[70px]"
            src={voices[0]?.image}
            alt="Card-image-voices"
            width={60}
            height={60}
            priority={true}
          />
        )}
      </Link>
    </div>
  );
};

export default CardCharacters;
