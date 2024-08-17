import { gql } from "@apollo/client";
import { client } from "@/app/ApoloClient";

interface Animes {
  id: number;
  title: {
    romaji: string;
  };
  coverImage: {
    large: string;
  };

  description: string;
}

interface AnimeData {
  Page: {
    media: Animes[];
  };
}

interface topAnimes {
  id: number;
  title: {
    romaji: string;
  };
  coverImage: {
    large: string;
  };

  episodes: number;
  season: string;
  status: string;
  seasonYear: number;
  type: string;
  favourites: number;
  format: string;
}

interface topAnimesResult {
  Page: {
    media: topAnimes[];
  };
}

export const fetchSeasonsAnimes = async (): Promise<Animes[]> => {
  const { data } = await client.query<AnimeData>({
    query: gql`
      query {
        Page(page: 1) {
          media(type: ANIME, sort: TRENDING_DESC) {
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

export const fetchNextSeason = async (): Promise<Animes[]> => {
  const { data } = await client.query<AnimeData>({
    query: gql`
      query {
        Page(page: 1) {
          media(type: ANIME, status: NOT_YET_RELEASED, sort: POPULARITY_DESC) {
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

export const fetchTopAnimes = async (): Promise<topAnimes[]> => {
  const { data } = await client.query<topAnimesResult>({
    query: gql`
      query {
        Page(page: 1) {
          media(type: ANIME, sort: SCORE_DESC) {
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
            episodes
            season
            status
            seasonYear
            type
            favourites
            format
          }
        }
      }
    `,
  });

  return data.Page.media;
};

export const fetchResearchedAnimes = async (
  parameter: string | null
): Promise<Animes[]> => {
  const { data } = await client.query<AnimeData>({
    query: gql`
      query ($search: String) {
        Page(page: 1) {
          media(type: ANIME, isAdult: false, search: $search) {
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

export const fetchGenresAnimes = async (
  parameter: string | null
): Promise<Animes[]> => {
  const { data } = await client.query<AnimeData>({
    query: gql`
      query ($genre: String) {
        Page(page: 1) {
          media(
            type: ANIME
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

export const fetchSearchAnimeByGenre = async (
  search: string | null,
  genre: string | null
): Promise<Animes[]> => {
  const { data } = await client.query<AnimeData>({
    query: gql`
      query ($search: String, $genre: String) {
        Page(page: 1) {
          media(type: ANIME, isAdult: false, search: $search, genre: $genre) {
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
