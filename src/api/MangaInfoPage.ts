import { client } from "@/app/ApoloClient";
import { Manga } from "@/types/manga";
import { gql } from "@apollo/client";

interface MangaByidData {
  Page: {
    media: Manga[];
  };
}

export const getMangaById = async (id: number): Promise<Manga[]> => {
  const { data } = await client.query<MangaByidData>({
    query: gql`
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
    `,
    variables: { id },
  });
  return data.Page.media;
};
