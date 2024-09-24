import { client } from "@/app/ApoloClient";
import { FETCH_ANIME_BY_ID } from "@/queries/Animes/AnimeInfoPage";
import { Anime } from "@/types/anime";

interface AnimeByIdData {
  Page: {
    media: Anime[];
  };
}

export const getAnimeById = async (id: number): Promise<Anime[]> => {
  const { data } = await client.query<AnimeByIdData>({
    query: FETCH_ANIME_BY_ID,
    variables: { id: id },
  });
  return data.Page.media;
};
