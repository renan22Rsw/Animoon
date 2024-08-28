import { getAnimeById } from "@/api/AnimeInfoPage";

import CardCharacters from "@/components/Cards/CardCharacters";
import CardStaff from "@/components/Cards/CardStaff";
import AnimeContainer from "@/components/Container/AnimeContainer";
import CharactersContainer from "@/components/Container/CharactersContainer";
import RecommendationsContainer from "@/components/Container/RecommendationsContainer";
import StaffContainer from "@/components/Container/StaffContainer";
import Trailer from "@/components/Container/Trailer";
import Description from "@/components/Description/Description";
import Header from "@/components/Header/Header";
import AnimeSideBar from "@/components/Infos/AnimeInfo/AnimeSideBarInfo";
import AnimeRecomendations from "@/components/Recomendations/Animes/AnimeRecomendations";

import { Anime } from "@/types/anime";

import React from "react";

const AnimeInfo = async ({ params }: ParamId) => {
  const data: Anime[] = await getAnimeById(params.id);
  const animes = data.map((anime) => ({
    title: anime.title.romaji,
    description: anime.description,
    image: anime.coverImage.large,
    trailer: anime.trailer?.id,

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

    characters: anime.characters.edges.map((characters) => ({
      id: characters.node.id,
      name: characters.node.name.userPreferred,
      image: characters.node.image.medium,
      role: characters.role,

      voices: characters.voiceActors.map((voice) => ({
        id: voice.id,
        name: voice.name.userPreferred,
        image: voice.image.medium,
        language: voice.languageV2,
      })),
    })),
    staffs: anime.staff.nodes.map((staff) => ({
      id: staff.id,
      name: staff.name.userPreferred,
      image: staff.image.medium,
      occupations: staff.primaryOccupations,
    })),

    recommendations: anime.recommendations.nodes.map((recommended) => ({
      id: recommended.mediaRecommendation?.id,
      title: recommended.mediaRecommendation?.title.romaji,
      image: recommended.mediaRecommendation?.coverImage.large,
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
      <AnimeSideBar
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
        <Description description={anime.description.replace(/<[^>]+>/g, "")} />

        <CharactersContainer id={params.id}>
          {anime.characters.slice(0, 6).map((character) => (
            <CardCharacters
              key={character.id}
              id={character.id}
              name={character.name}
              image={character.image}
              role={character.role}
              voices={character.voices}
            />
          ))}
        </CharactersContainer>

        <StaffContainer id={params.id}>
          {anime.staffs.slice(0, 4).map((staff) => (
            <CardStaff
              key={staff.id}
              id={staff.id}
              name={staff.name}
              image={staff.image}
              occupation={staff.occupations}
            />
          ))}
        </StaffContainer>

        {anime.trailer ? <Trailer trailerId={anime.trailer} /> : ""}

        {anime.recommendations ? (
          <RecommendationsContainer>
            {anime.recommendations.slice(0, 5).map((recommended) => (
              <AnimeRecomendations
                key={recommended.id}
                id={recommended.id}
                title={recommended.title}
                image={recommended.image}
              />
            ))}
          </RecommendationsContainer>
        ) : (
          ""
        )}
      </AnimeContainer>
    </>
  );
};

export default AnimeInfo;
