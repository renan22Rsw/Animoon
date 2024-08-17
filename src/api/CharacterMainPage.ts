import { client } from "@/app/ApoloClient";
import { gql } from "@apollo/client";

interface Characters {
  id: number;
  name: {
    full: string;
  };
  image: {
    large: string;
  };
}

interface CharactersData {
  Page: {
    characters: Characters[];
  };
}

export const fetchCharactersBirthdays = async (): Promise<Characters[]> => {
  const { data } = await client.query<CharactersData>({
    query: gql`
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
    `,
  });
  return data.Page.characters;
};

export const fetchMostFavoritedCharacters = async (): Promise<Characters[]> => {
  const { data } = await client.query<CharactersData>({
    query: gql`
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
    `,
  });
  return data.Page.characters;
};

export const fetchResearchedCharacters = async (
  parameter: string | null
): Promise<Characters[]> => {
  const { data } = await client.query<CharactersData>({
    query: gql`
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
    `,
    variables: { search: parameter },
  });
  return data.Page.characters;
};
