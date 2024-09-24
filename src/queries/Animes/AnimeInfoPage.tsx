import { gql } from "@apollo/client";

export const FETCH_ANIME_BY_ID = gql`
  query ($id: Int!) {
    Page(page: 1, perPage: 1) {
      media(type: ANIME, id: $id) {
        title {
          romaji
        }
        coverImage {
          extraLarge
        }
        description
        format
        episodes
        duration
        status
        season
        seasonYear
        averageScore
        meanScore
        popularity
        favourites
        genres
        source
        characters(sort: FAVOURITES_DESC) {
          edges {
            role
            node {
              name {
                userPreferred
              }
              id
              image {
                medium
              }
            }
            voiceActors(language: JAPANESE) {
              id
              name {
                userPreferred
              }
              languageV2
              image {
                medium
              }
            }
          }
        }
        staff(sort: FAVOURITES_DESC) {
          nodes {
            name {
              userPreferred
            }
            primaryOccupations
            id
            image {
              medium
            }
          }
        }
        trailer {
          id
        }
        recommendations {
          nodes {
            mediaRecommendation {
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
      }
    }
  }
`;
