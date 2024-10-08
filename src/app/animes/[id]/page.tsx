import { getAnimeById } from "@/api/AnimeInfoPage";

import CardCharacters from "@/components/Cards/CardCharacters/CardCharacters";
import CardStaff from "@/components/Cards/CardStaffs/CardStaff";
import Container from "@/components/Container/Anime/AnimeContainer";
import CharactersContainer from "@/components/Container/Characters/CharactersContainer";
import RecommendationsContainer from "@/components/Container/Recomendations/RecommendationsContainer";
import StaffContainer from "@/components/Container/Staffs/StaffContainer";
import Trailer from "@/components/Trailer/Trailer";
import Description from "@/components/Description/Description";
import Header from "@/components/Header/MainHeader/Header";
import AnimeSideBar from "@/components/Infos/AnimeInfo/AnimeSideBarInfo";
import AnimeRecomendations from "@/components/Recomendations/Animes/AnimeRecomendations";

import { AnimeInfos } from "@/types/anime";

import React from "react";

const AnimeInfo = async ({ params }: ParamId) => {
  const { id } = params;
  const data: AnimeInfos[] = await getAnimeById(id);
  const animes = Array.isArray(data)
    ? data.map((anime) => ({
        title: anime.title.romaji,
        description: anime.description,
        image: anime.coverImage.extraLarge,
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
      }))
    : [];
  const anime = animes[0] || [];

  return (
    <>
      <Header
        title={anime.title}
        description={anime.description?.replace(/<[^>]+>/g, "")}
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

      <Container>
        <Description description={anime.description?.replace(/<[^>]+>/g, "")} />

        <CharactersContainer id={params.id}>
          {anime.characters?.slice(0, 6).map((character) => (
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
          {anime.staffs?.slice(0, 4).map((staff) => (
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
            {anime.recommendations?.slice(0, 5).map((recommended) => (
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
      </Container>
    </>
  );
};

export default AnimeInfo;
