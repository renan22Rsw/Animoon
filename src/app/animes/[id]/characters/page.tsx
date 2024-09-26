import { getAnimeById } from "@/api/AnimeInfoPage";
import CardCharacters from "@/components/Cards/CardCharacters/CardCharacters";
import AnimeContainer from "@/components/Container/Anime/AnimeContainer";
import CharactersContainer from "@/components/Container/Characters/CharactersContainer";
import Header from "@/components/Header/MainHeader/Header";
import AnimeSideBarInfo from "@/components/Infos/AnimeInfo/AnimeSideBarInfo";
import Loading from "@/components/Loading/Loading";
import { Anime } from "@/types/anime";

import React, { Suspense } from "react";

const SubAnimesCharactersPage = async ({ params }: ParamId) => {
  const { id } = params;
  const data: Anime[] = await getAnimeById(id);
  const animes = data.map((anime) => ({
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
  }));

  const anime = animes[0];

  return (
    <Suspense fallback={<Loading />}>
      <Header
        title={anime.title}
        coverImage={anime.image}
        description={anime.description.replace(/<[^>]+>/g, "")}
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
        <CharactersContainer id={params.id}>
          {anime.characters.map((character) => (
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
      </AnimeContainer>
    </Suspense>
  );
};

export default SubAnimesCharactersPage;
