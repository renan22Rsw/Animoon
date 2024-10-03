import { client } from "@/app/ApoloClient";
import { FETCH_ANIME_BY_ID } from "@/queries/Animes/AnimeInfoPage";
import { AnimeInfo } from "@/types/anime";

interface AnimeByIdData {
  Page: {
    media: AnimeInfo[];
  };
}

export const getAnimeById = async (id: number): Promise<AnimeInfo[]> => {
  const { data } = await client.query<AnimeByIdData>({
    query: FETCH_ANIME_BY_ID,
    variables: { id: id },
  });
  return data.Page.media;
};
