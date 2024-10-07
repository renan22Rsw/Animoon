import { client } from "@/app/ApoloClient";
import { FETCH_MANGAS_BY_ID } from "@/queries/Mangas/MangasInfoPage";
import { MangaInfos } from "@/types/manga";

interface MangaByidData {
  Page: {
    media: MangaInfos[];
  };
}

export const getMangaById = async (id: number): Promise<MangaInfos[]> => {
  const { data } = await client.query<MangaByidData>({
    query: FETCH_MANGAS_BY_ID,
    variables: { id },
  });
  return data.Page.media;
};
