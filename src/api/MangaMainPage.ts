import { client } from "@/app/ApoloClient";
import {
  FETCH_GENRES_MANGAS,
  FETCH_POPULAR_MANGAS,
  FETCH_RESEARCHED_MANGAS,
  FETCH_SEASONAL_MANGAS,
  FETCH_TOP_MANGAS,
} from "@/queries/Mangas/MangaMainPage";

export interface Mangas {
  id: number;
  title: {
    romaji: string;
  };
  coverImage: {
    large: string;
  };
}

interface MangaData {
  Page: {
    media: Mangas[];
  };
}

interface topMangas {
  id: number;
  title: {
    romaji: string;
  };
  coverImage: {
    large: string;
  };

  chapters: number | null;
  volumes: number | null;
  season: string;
  status: string;
  seasonYear: number;
  meanScore: number;
  type: string;
  favourites: number;
  format: string;
}

interface topMangasResult {
  Page: {
    media: topMangas[];
  };
}

export const fetchSeasonsMangas = async (): Promise<Mangas[]> => {
  const { data } = await client.query<MangaData>({
    query: FETCH_SEASONAL_MANGAS,
  });

  return data.Page.media;
};

export const fetchPopularMangas = async (): Promise<Mangas[]> => {
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
): Promise<Mangas[]> => {
  const { data } = await client.query<MangaData>({
    query: FETCH_RESEARCHED_MANGAS,
    variables: { search: parameter },
  });
  return data.Page.media;
};

export const fetchGenresMangas = async (
  parameter: string | null
): Promise<Mangas[]> => {
  const { data } = await client.query<MangaData>({
    query: FETCH_GENRES_MANGAS,

    variables: { genre: parameter },
  });
  return data.Page.media;
};

export const fetchSearchMangasByGenre = async (
  search: string | null,
  genre: string | null
): Promise<Mangas[]> => {
  const { data } = await client.query<MangaData>({
    query: FETCH_GENRES_MANGAS,
    variables: { genre: genre, search: search },
  });
  return data.Page.media;
};
