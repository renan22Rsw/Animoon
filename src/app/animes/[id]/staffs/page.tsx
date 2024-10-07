import { getAnimeById } from "@/api/AnimeInfoPage";
import { AnimeInfos } from "@/types/anime";
import React from "react";

import Header from "@/components/Header/MainHeader/Header";
import AnimeSideBarInfo from "@/components/Infos/AnimeInfo/AnimeSideBarInfo";
import Container from "@/components/Container/Anime/AnimeContainer";
import StaffContainer from "@/components/Container/Staffs/StaffContainer";
import CardStaff from "@/components/Cards/CardStaffs/CardStaff";

const SubAnimeStaffssPage = async ({ params }: ParamId) => {
  const { id } = params;
  const data: AnimeInfos[] = await getAnimeById(id);
  const animes = Array.isArray(data)
    ? data.map((anime) => ({
        title: anime.title.romaji,
        description: anime.description,
        image: anime.coverImage.extraLarge,

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
      }))
    : [];

  const anime = animes[0] || [];

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

      <Container>
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
      </Container>
    </>
  );
};

export default SubAnimeStaffssPage;
