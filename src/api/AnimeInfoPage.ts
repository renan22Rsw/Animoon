import { client } from "@/app/ApoloClient";
import { Anime } from "@/types/anime";
import { gql } from "@apollo/client";

interface AnimeByIdData {
  Page: {
    media: Anime[];
  };
}

export const getAnimeById = async (id: number): Promise<Anime[]> => {
  const { data } = await client.query<AnimeByIdData>({
    query: gql`
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
    `,
    variables: { id }, // Passa o parâmetro como variável
  });
  return data.Page.media;
};
