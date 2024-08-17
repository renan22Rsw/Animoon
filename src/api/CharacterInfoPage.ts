import { client } from "@/app/ApoloClient";
import { Characters } from "@/types/character";
import { gql } from "@apollo/client";

interface CharactersData {
  Page: {
    characters: Characters[];
  };
}

export const fetchCharactersById = async (
  id: number
): Promise<Characters[]> => {
  const { data } = await client.query<CharactersData>({
    query: gql`
      query ($id: Int!) {
        Page {
          characters(id: $id) {
            id
            name {
              userPreferred
              native
              alternative
            }

            dateOfBirth {
              month
              day
            }
            age
            gender
            bloodType
            description

            image {
              large
            }
          }
        }
      }
    `,
    variables: { id },
  });
  return data.Page.characters;
};
