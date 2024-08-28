import { getAnimeById } from "@/api/AnimeInfoPage";
import { Anime } from "@/types/anime";
import React from "react";

import Header from "@/components/Header/Header";
import AnimeSideBarInfo from "@/components/Infos/AnimeInfo/AnimeSideBarInfo";
import AnimeContainer from "@/components/Container/AnimeContainer";
import StaffContainer from "@/components/Container/StaffContainer";
import CardStaff from "@/components/Cards/CardStaff";

const SubAnimeStaffssPage = async ({ params }: ParamId) => {
  const data: Anime[] = await getAnimeById(params.id);
  const animes = data.map((anime) => ({
    title: anime.title.romaji,
    description: anime.description,
    image: anime.coverImage.large,

    format: anime.format,
    duration: anime.duration,
    status: anime.status,
    season: anime.season,
    seasonYear: anime.seasonYear,
    averageScore: anime.averageScore,
    meanScore: anime.meanScore,
    popularity: anime.popularity,
    favourites: anime.favourites,

    source: anime.source,
    genres: anime.genres.map((genre) => genre),

    staffs: anime.staff.nodes.map((staff) => ({
      id: staff.id,
      name: staff.name.userPreferred,
      image: staff.image.medium,
      occupations: staff.primaryOccupations,
    })),
  }));

  const anime = animes[0];

  return (
    <>
      <Header
        title={anime.title}
        description={anime.description.replace(/<[^>]+>/g, "")}
        coverImage={anime.image}
      />

      <AnimeSideBarInfo
        format={anime.format}
        duration={anime.duration}
        status={anime.status}
        season={anime.season}
        averageScore={anime.averageScore}
        meanScore={anime.meanScore}
        popularity={anime.popularity}
        favourites={anime.favourites}
        source={anime.source}
        genres={anime.genres}
        seasonYear={anime.seasonYear}
      />

      <AnimeContainer>
        <StaffContainer id={params.id}>
          {animes[0].staffs.map((staff) => (
            <CardStaff
              key={staff.id}
              id={staff.id}
              name={staff.name}
              image={staff.image}
              occupation={staff.occupations}
            />
          ))}
        </StaffContainer>
      </AnimeContainer>
    </>
  );
};

export default SubAnimeStaffssPage;
