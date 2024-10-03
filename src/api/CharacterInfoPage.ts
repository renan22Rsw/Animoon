import { client } from "@/app/ApoloClient";
import { FETCH_CHARACTER_BY_ID } from "@/queries/Characters/CharacterInfoPage";
import { characterInfo } from "@/types/character";

interface CharactersData {
  Page: {
    characters: characterInfo[];
  };
}

export const fetchCharactersById = async (
  id: number
): Promise<characterInfo[]> => {
  const { data } = await client.query<CharactersData>({
    query: FETCH_CHARACTER_BY_ID,
    variables: { id },
  });
  return data.Page.characters;
};
