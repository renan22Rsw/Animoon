import { gql } from "@apollo/client";

export const FETCH_SEASONAL_ANIMES = gql`
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
`;

export const FETCH_NEXT_SEASON_ANIMES = gql`
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
`;

export const FETCH_RESEARCHED_ANIMES = gql`
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
`;

export const FETCH_GENRES_ANIMES = gql`
  query ($genre: String) {
    Page(page: 1) {
      media(type: ANIME, isAdult: false, genre: $genre, sort: POPULARITY_DESC) {
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
`;

export const FETCH_SEARCH_GENRES_ANIMES = gql`
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
`;

export const FETCH_TOP_ANIMES = gql`
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
`;
