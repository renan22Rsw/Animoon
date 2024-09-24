import { gql } from "@apollo/client";

export const FETCH_CHARACTERS_BIRTHDAYS = gql`
  query {
    Page(page: 1) {
      characters(isBirthday: true) {
        id
        name {
          full
        }
        image {
          large
        }
      }
    }
  }
`;

export const FETCH_MOST_FAVORITES_CHARACTERS = gql`
  query {
    Page {
      characters(sort: FAVOURITES_DESC) {
        id
        name {
          full
        }
        image {
          large
        }
      }
    }
  }
`;

export const FETCH_RESEARCHED_CHARACTERS = gql`
  query ($search: String) {
    Page {
      characters(search: $search) {
        id
        name {
          full
        }
        image {
          large
        }
      }
    }
  }
`;
