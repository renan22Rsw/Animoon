import { getMangaById } from "@/api/MangaInfoPage";
import CardCharacters from "@/components/Cards/CardCharacters";
import CardStaff from "@/components/Cards/CardStaff";
import AnimeContainer from "@/components/Container/AnimeContainer";
import CharactersContainer from "@/components/Container/CharactersContainer";
import RecommendationsContainer from "@/components/Container/RecommendationsContainer";
import StaffContainer from "@/components/Container/StaffContainer";
import Trailer from "@/components/Container/Trailer";
import Description from "@/components/Description/Description";
import Header from "@/components/Header/Header";
import MangaSideBarInfo from "@/components/Infos/MangaSideBarInfo";
import MangaRecomendations from "@/components/Recomendations/MangaRecomendations";

import { Manga } from "@/types/manga";
import React from "react";

const MangaInfo = async ({ params }: ParamId) => {
  const data: Manga[] = await getMangaById(params.id);
  const mangas = data.map((manga) => ({
    title: manga.title.romaji,
    image: manga.coverImage.large,
    description: manga.description,

    format: manga.format,
    status: manga.status,
    averageScore: manga.averageScore,
    meanScore: manga.meanScore,
    popularity: manga.popularity,
    favourites: manga.favourites,
    genres: manga.genres.map((genre) => genre),
    sources: manga.source,

    characters: manga.characters.edges.map((character) => ({
      id: character.node.id,
      name: character.node.name.userPreferred,
      image: character.node.image.medium,
      role: character.role,
    })),

    staffs: manga.staff.nodes.map((staff) => ({
      id: staff.id,
      name: staff.name.userPreferred,
      image: staff.image.medium,
      occupation: staff.primaryOccupations,
    })),

    trailer: manga.trailer?.id,

    recommendations: manga.recommendations.nodes.map((recommended) => ({
      id: recommended.mediaRecommendation.id,
      title: recommended.mediaRecommendation.title.romaji,
      image: recommended.mediaRecommendation.coverImage.large,
    })),
  }));

  const manga = mangas[0];

  return (
    <>
      <Header
        title={manga.title}
        coverImage={manga.image}
        description={manga.description.replace(/<[^>]+>/g, "")}
      />

      <MangaSideBarInfo
        format={manga.format}
        status={manga.status}
        averageScore={manga.averageScore}
        meanScore={manga.meanScore}
        popularity={manga.popularity}
        favourites={manga.favourites}
        genres={manga.genres}
        source={manga.sources}
      />

      <AnimeContainer>
        <Description description={manga.description.replace(/<[^>]+>/g, "")} />
        <CharactersContainer id={params.id}>
          {manga.characters.slice(0, 6).map((character) => (
            <CardCharacters
              key={character.id}
              id={character.id}
              name={character.name}
              image={character.image}
              role={character.role}
              voices={[]}
            />
          ))}
        </CharactersContainer>

        <StaffContainer id={params.id}>
          {manga.staffs.slice(0, 4).map((staff) => (
            <CardStaff
              key={staff.id}
              id={staff.id}
              name={staff.name}
              image={staff.image}
              occupation={staff.occupation}
            />
          ))}
        </StaffContainer>

        {manga.trailer ? <Trailer trailerId={manga.trailer} /> : ""}

        <RecommendationsContainer>
          {mangas[0].recommendations.slice(0, 5).map((recommended) => (
            <MangaRecomendations
              key={recommended.id}
              id={recommended.id}
              title={recommended.title}
              image={recommended.image}
            />
          ))}
        </RecommendationsContainer>
      </AnimeContainer>
    </>
  );
};

export default MangaInfo;
