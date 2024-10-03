import { client } from "@/app/ApoloClient";
import { FETCH_MANGAS_BY_ID } from "@/queries/Mangas/MangasInfoPage";
import { MangaInfo } from "@/types/manga";

interface MangaByidData {
  Page: {
    media: MangaInfo[];
  };
}

export const getMangaById = async (id: number): Promise<MangaInfo[]> => {
  const { data } = await client.query<MangaByidData>({
    query: FETCH_MANGAS_BY_ID,
    variables: { id },
  });
  return data.Page.media;
};
