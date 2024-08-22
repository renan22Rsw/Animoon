import React from "react";

interface InfosProps {
  format: string;
  duration: number;
  status: string;
  seasonYear: number;
  season: string;
  averageScore: number;
  meanScore: number;
  popularity: number;
  favourites: number;

  source: string;
  genres: string[];
}

interface Titles {
  id: number;
  titles: string;
  infos: string | string[] | number;
}

const AnimeSideBarInfo = ({
  format,
  duration,
  status,
  season,
  seasonYear,
  averageScore,
  meanScore,
  popularity,
  favourites,
  genres,
  source,
}: InfosProps) => {
  const Infos: Titles[] = [
    {
      id: 1,
      titles: "Format",
      infos: format,
    },
    {
      id: 2,
      titles: "Episode Duration",
      infos: duration ? duration + "min" : "N/A",
    },
    {
      id: 3,
      titles: "Status",
      infos: status,
    },

    {
      id: 4,
      titles: "Season",
      infos: season,
    },

    {
      id: 5,
      titles: "Season Year",
      infos: seasonYear,
    },

    {
      id: 6,
      titles: "Average Score",
      infos: averageScore ? averageScore + "%" : "N/A",
    },

    {
      id: 7,
      titles: "Mean Score",
      infos: meanScore ? meanScore + "% " : "N/A",
    },

    {
      id: 8,
      titles: "Popularity",
      infos: popularity,
    },

    {
      id: 9,
      titles: "Favorites",
      infos: favourites,
    },

    {
      id: 10,
      titles: "Genres",
      infos: genres.join(", "),
    },

    {
      id: 11,
      titles: "Source",
      infos: source,
    },
  ];

  return (
    <div className="bg-[#1C1C1C] w-[230px] my-4  absolute md:left-[2%] lg-[5%] 2xl:left-[5%] rounded-md py-4 hidden md:block">
      <div className="mx-4 text-white text-xs">
        {Infos.map((info) => (
          <ul className="py-2" key={info.id}>
            <h6 className="py-1 text-sm">{info.titles}</h6>
            <li>{info.infos?.toString()}</li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default AnimeSideBarInfo;
