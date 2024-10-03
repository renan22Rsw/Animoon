import { client } from "@/app/ApoloClient";
import {
  FETCH_GENRES_MANGAS,
  FETCH_POPULAR_MANGAS,
  FETCH_RESEARCHED_MANGAS,
  FETCH_SEASONAL_MANGAS,
  FETCH_TOP_MANGAS,
} from "@/queries/Mangas/MangaMainPage";

import { MangaPages, topMangas } from "@/types/manga";

interface MangaData {
  Page: {
    media: MangaPages[];
  };
}

interface topMangasResult {
  Page: {
    media: topMangas[];
  };
}

export const fetchSeasonsMangas = async (): Promise<MangaPages[]> => {
  const { data } = await client.query<MangaData>({
    query: FETCH_SEASONAL_MANGAS,
  });

  return data.Page.media;
};

export const fetchPopularMangas = async (): Promise<MangaPages[]> => {
  const { data } = await client.query<MangaData>({
    query: FETCH_POPULAR_MANGAS,
  });
  return data.Page.media;
};

export const fetchTopMangas = async (): Promise<topMangas[]> => {
  const { data } = await client.query<topMangasResult>({
    query: FETCH_TOP_MANGAS,
  });

  return data.Page.media;
};

export const fetchResearchedMangas = async (
  parameter: string | null
): Promise<MangaPages[]> => {
  const { data } = await client.query<MangaData>({
    query: FETCH_RESEARCHED_MANGAS,
    variables: { search: parameter },
  });
  return data.Page.media;
};

export const fetchGenresMangas = async (
  parameter: string | null
): Promise<MangaPages[]> => {
  const { data } = await client.query<MangaData>({
    query: FETCH_GENRES_MANGAS,

    variables: { genre: parameter },
  });
  return data.Page.media;
};

export const fetchSearchMangasByGenre = async (
  search: string | null,
  genre: string | null
): Promise<MangaPages[]> => {
  const { data } = await client.query<MangaData>({
    query: FETCH_GENRES_MANGAS,
    variables: { genre: genre, search: search },
  });
  return data.Page.media;
};
