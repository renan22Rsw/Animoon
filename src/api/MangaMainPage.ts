import { client } from "@/app/ApoloClient";
import { gql } from "@apollo/client";

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
    query: gql`
      query {
        Page(page: 1) {
          media(type: MANGA, sort: TRENDING_DESC) {
            id
            title {
              romaji
            }
            coverImage {
              large
            }
          }
        }
      }
    `,
  });

  return data.Page.media;
};

export const fetchPopularMangas = async (): Promise<Mangas[]> => {
  const { data } = await client.query<MangaData>({
    query: gql`
      query {
        Page(page: 1) {
          media(type: MANGA, sort: POPULARITY_DESC) {
            id
            title {
              romaji
            }
            coverImage {
              large
            }
          }
        }
      }
    `,
  });
  return data.Page.media;
};

export const fetchTopMangas = async (): Promise<topMangas[]> => {
  const { data } = await client.query<topMangasResult>({
    query: gql`
      query {
        Page(page: 1) {
          media(type: MANGA, sort: SCORE_DESC) {
            id
            title {
              romaji
            }
            coverImage {
              large
            }
            rankings {
              id
            }
            chapters
            volumes
            season
            status
            seasonYear
            type
            favourites
            format
            meanScore
          }
        }
      }
    `,
  });

  return data.Page.media;
};

export const fetchResearchedMangas = async (
  parameter: string | null
): Promise<Mangas[]> => {
  const { data } = await client.query<MangaData>({
    query: gql`
      query ($search: String) {
        Page(page: 1) {
          media(type: MANGA, isAdult: false, search: $search) {
            id
            title {
              romaji
            }
            coverImage {
              large
            }
          }
        }
      }
    `,
    variables: { search: parameter },
  });
  return data.Page.media;
};

export const fetchGenresMangas = async (
  parameter: string | null
): Promise<Mangas[]> => {
  const { data } = await client.query<MangaData>({
    query: gql`
      query ($genre: String) {
        Page(page: 1) {
          media(
            type: MANGA
            isAdult: false
            genre: $genre
            sort: POPULARITY_DESC
          ) {
            id
            title {
              romaji
            }
            coverImage {
              large
            }
          }
        }
      }
    `,
    variables: { genre: parameter },
  });
  return data.Page.media;
};

export const fetchSearchMangasByGenre = async (
  search: string | null,
  genre: string | null
): Promise<Mangas[]> => {
  const { data } = await client.query<MangaData>({
    query: gql`
      query ($search: String, $genre: String) {
        Page(page: 1) {
          media(type: MANGA, isAdult: false, search: $search, genre: $genre) {
            id
            title {
              romaji
            }
            coverImage {
              large
            }
          }
        }
      }
    `,
    variables: { genre: genre, search: search },
  });
  return data.Page.media;
};
