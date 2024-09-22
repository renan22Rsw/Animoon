import React from "react";
import Image from "next/image";
import Link from "next/link";

interface RecommendationsProps {
  id: number;
  title: string;
  image: string;
}

const AnimeRecomendations = ({ title, image, id }: RecommendationsProps) => {
  return (
    <>
      <div className="text-center mx-auto w-[150px]">
        <Link href={`/animes/${id}`}>
          <Image
            className="rounded-md mx-auto"
            src={image}
            width={100}
            height={100}
            alt="recomendation-anime"
            style={{ width: "130px", height: "180px", objectFit: "fill" }}
          />
        </Link>
        <h6 className="my-2 text-white text-sm 2xl:text-base">
          {title.length > 35 ? title.substring(0, 35) + "..." : title}
        </h6>
      </div>
    </>
  );
};

export default AnimeRecomendations;
