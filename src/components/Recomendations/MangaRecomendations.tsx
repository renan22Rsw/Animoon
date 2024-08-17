import Image from "next/image";
import Link from "next/link";
import React from "react";

interface RecommendationsProps {
  id: number;
  title: string;
  image: string;
}

const MangaRecomendations = ({ title, image, id }: RecommendationsProps) => {
  return (
    <>
      <div className="text-center mx-auto w-[150px] lg:w-[200px] ">
        <Link href={`/mangas/${id}`}>
          <Image
            className="rounded-md mx-auto"
            src={image}
            width={150}
            height={150}
            alt="recomendation-manga"
          />
        </Link>
        <h6 className="my-2 text-white text-sm 2xl:text-base">{title}</h6>
      </div>
    </>
  );
};

export default MangaRecomendations;
