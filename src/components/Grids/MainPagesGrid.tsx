import React from "react";
import MainCard from "../Cards/MainCard/MainCard";

interface MainPagesGridProps {
  id: number;
  title: {
    romaji: string;
  };
  coverImage: {
    large: string;
  };
}

interface CharacterMainPage {
  id: number;
  name: {
    full: string;
  };
  image: {
    large: string;
  };
}

interface MainPagesGridData {
  datas: (MainPagesGridProps | CharacterMainPage)[];
}

const MainPagesGrid = ({ datas }: MainPagesGridData) => {
  return (
    <div className="grid grid-cols-3 md:ml-14 md:grid-cols-3 lg:grid-cols-6 lg:text-center ">
      {datas.map((data) => {
        const title = "title" in data ? data.title.romaji : data.name.full;
        const image =
          "coverImage" in data ? data.coverImage.large : data.image.large;

        return (
          <MainCard key={data.id} title={title} images={image} id={data.id} />
        );
      })}
    </div>
  );
};

export default MainPagesGrid;
