import { getMangaById } from "@/api/MangaInfoPage";
import CardCharacters from "@/components/Cards/CardCharacters/CardCharacters";
import AnimeContainer from "@/components/Container/Anime/AnimeContainer";
import CharactersContainer from "@/components/Container/Characters/CharactersContainer";
import Header from "@/components/Header/MainHeader/Header";
import MangaSideBarInfo from "@/components/Infos/MangaInfo/MangaSideBarInfo";
import { Manga } from "@/types/manga";
import React from "react";

const SubMangasCharactersPage = async ({ params }: ParamId) => {
  const { id } = params;
  const data: Manga[] = await getMangaById(id);
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
        <CharactersContainer id={params.id}>
          {manga.characters.map((character) => (
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
      </AnimeContainer>
    </>
  );
};

export default SubMangasCharactersPage;
