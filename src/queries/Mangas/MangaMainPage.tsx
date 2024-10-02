import { gql } from "@apollo/client";

export const FETCH_SEASONAL_MANGAS = gql`
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
`;

export const FETCH_POPULAR_MANGAS = gql`
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
`;

export const FETCH_TOP_MANGAS = gql`
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
        status
        type
        favourites
        format
        meanScore
      }
    }
  }
`;

export const FETCH_RESEARCHED_MANGAS = gql`
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
`;

export const FETCH_GENRES_MANGAS = gql`
  query ($genre: String) {
    Page(page: 1) {
      media(type: MANGA, isAdult: false, genre: $genre, sort: POPULARITY_DESC) {
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

export const FETCH_SEARCH_GENRES_MANGAS = gql`
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
`;
