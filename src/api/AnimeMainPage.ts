import { client } from "@/app/ApoloClient";
import {
  FETCH_GENRES_ANIMES,
  FETCH_NEXT_SEASON_ANIMES,
  FETCH_RESEARCHED_ANIMES,
  FETCH_SEARCH_GENRES_ANIMES,
  FETCH_SEASONAL_ANIMES,
  FETCH_TOP_ANIMES,
} from "@/queries/Animes/AnimeMainPage";

import { AnimePage, topAnimes } from "@/types/anime";

interface AnimeData {
  Page: {
    media: AnimePage[];
  };
}

interface topAnimesResult {
  Page: {
    media: topAnimes[];
  };
}

export const fetchSeasonsAnimes = async (): Promise<AnimePage[]> => {
  const { data } = await client.query<AnimeData>({
    query: FETCH_SEASONAL_ANIMES,
  });
  return data.Page.media;
};

export const fetchNextSeason = async (): Promise<AnimePage[]> => {
  const { data } = await client.query<AnimeData>({
    query: FETCH_NEXT_SEASON_ANIMES,
  });
  return data.Page.media;
};

export const fetchTopAnimes = async (): Promise<topAnimes[]> => {
  const { data } = await client.query<topAnimesResult>({
    query: FETCH_TOP_ANIMES,
  });

  return data.Page.media;
};

export const fetchResearchedAnimes = async (
  parameter: string | null
): Promise<AnimePage[]> => {
  const { data } = await client.query<AnimeData>({
    query: FETCH_RESEARCHED_ANIMES,
    variables: { search: parameter },
  });
  return data.Page.media;
};

export const fetchGenresAnimes = async (
  parameter: string | null
): Promise<AnimePage[]> => {
  const { data } = await client.query<AnimeData>({
    query: FETCH_GENRES_ANIMES,
    variables: { genre: parameter },
  });
  return data.Page.media;
};

export const fetchSearchAnimeByGenre = async (
  search: string | null,
  genre: string | null
): Promise<AnimePage[]> => {
  const { data } = await client.query<AnimeData>({
    query: FETCH_SEARCH_GENRES_ANIMES,
    variables: { search: search, genre: genre },
  });
  return data.Page.media;
};
