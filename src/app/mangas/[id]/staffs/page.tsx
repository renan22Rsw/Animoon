import { getMangaById } from "@/api/MangaInfoPage";

import CardStaff from "@/components/Cards/CardStaffs/CardStaff";
import Container from "@/components/Container/Anime/AnimeContainer";
import StaffContainer from "@/components/Container/Staffs/StaffContainer";
import Header from "@/components/Header/MainHeader/Header";
import MangaSideBarInfo from "@/components/Infos/MangaInfo/MangaSideBarInfo";
import { MangaInfos } from "@/types/manga";
import React from "react";

const SubMangasStaffsPage = async ({ params }: ParamId) => {
  const { id } = params;
  const data: MangaInfos[] = await getMangaById(id);
  const mangas = Array.isArray(data)
    ? data.map((manga) => ({
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

        staffs: manga.staff.nodes.map((staff) => ({
          id: staff.id,
          name: staff.name.userPreferred,
          image: staff.image.medium,
          occupation: staff.primaryOccupations,
        })),
      }))
    : [];

  const manga = mangas[0] || [];

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

      <Container>
        <StaffContainer id={params.id}>
          {manga.staffs.map((staff) => (
            <CardStaff
              key={staff.id}
              id={staff.id}
              name={staff.name}
              image={staff.image}
              occupation={staff.occupation}
            />
          ))}
        </StaffContainer>
      </Container>
    </>
  );
};
export default SubMangasStaffsPage;
