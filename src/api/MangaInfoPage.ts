import { client } from "@/app/ApoloClient";
import { FETCH_MANGAS_BY_ID } from "@/queries/Mangas/MangasInfoPage";
import { Manga } from "@/types/manga";
import { gql } from "@apollo/client";

interface MangaByidData {
  Page: {
    media: Manga[];
  };
}

export const getMangaById = async (id: number): Promise<Manga[]> => {
  const { data } = await client.query<MangaByidData>({
    query: FETCH_MANGAS_BY_ID,
    variables: { id },
  });
  return data.Page.media;
};
