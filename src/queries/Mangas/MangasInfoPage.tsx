import { gql } from "@apollo/client";

export const FETCH_MANGAS_BY_ID = gql`
  query ($id: Int!) {
    Page(page: 1, perPage: 1) {
      media(type: MANGA, id: $id) {
        title {
          romaji
        }
        coverImage {
          large
        }
        description

        format
        status
        averageScore
        meanScore
        popularity
        favourites
        genres
        source

        characters {
          edges {
            role
            node {
              id
              name {
                userPreferred
              }
              image {
                medium
              }
            }
          }
        }

        staff {
          nodes {
            id
            name {
              userPreferred
            }
            primaryOccupations
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
