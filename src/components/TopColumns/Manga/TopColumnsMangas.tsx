import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaStar } from "react-icons/fa";

interface topColumnsMangas {
  title: string;
  id?: number;
  rank: number;
  images: string;
  source: string;
  meanScore: number;
  favorites: number;
  type: string;
  status: string;
  chapters: null | number;
  volumes: null | number;
}

const TopColumnsMangas = ({
  id,
  title,
  rank,
  images,
  status,
  type,
  favorites,
  chapters,
  volumes,
  meanScore,
}: topColumnsMangas) => {
  return (
    <div className="w-[90%] mx-auto flex justify-center items-center my-4">
      <h2 className="px-8 font-bold text-xl">{rank}°</h2>
      <div className="bg-[#1C1C1C] w-full px-4 my-4 rounded-md flex">
        <div className="h-[80px] w-[500px] flex items-center ">
          <Image
            src={images}
            width={35}
            height={35}
            alt="Image-Column"
            style={{
              width: "auto",
              height: "auto",
            }}
          />
          <Link href={`/mangas/${id}`}>
            {" "}
            <h3 className="mx-4 pb-6 font-bold text-sm">{title}</h3>
          </Link>
        </div>

        <div className="w-full grid items-center justify-end">
          <ul className="grid grid-cols-3 text-center w-[450px] ">
            <li className="px-4 font-bold ">{meanScore + "%"}</li>
            <li className="px-4 font-bold  ">{type}</li>

            <li className="px-4 font-bold capitalize">
              {volumes ? volumes + " vol " : "not finished"}
            </li>
            <li className="px-4 font-light text-xs flex items-center justify-center ">
              {favorites?.toString()}{" "}
              <FaStar className="text-yellow-400 mx-1 text-xs" />{" "}
            </li>
            <li className="px-4 font-light text-xs ">
              {chapters ? chapters + " ch" : ""}
            </li>
            <li className="px-4 font-light text-xs ">{status}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopColumnsMangas;
