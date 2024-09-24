import { client } from "@/app/ApoloClient";
import { FETCH_CHARACTER_BY_ID } from "@/queries/Characters/CharacterInfoPage";
import { Characters } from "@/types/character";

interface CharactersData {
  Page: {
    characters: Characters[];
  };
}

export const fetchCharactersById = async (
  id: number
): Promise<Characters[]> => {
  const { data } = await client.query<CharactersData>({
    query: FETCH_CHARACTER_BY_ID,
    variables: { id },
  });
  return data.Page.characters;
};
