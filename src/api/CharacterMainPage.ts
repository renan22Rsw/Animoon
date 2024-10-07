import { client } from "@/app/ApoloClient";
import {
  FETCH_CHARACTERS_BIRTHDAYS,
  FETCH_MOST_FAVORITES_CHARACTERS,
  FETCH_RESEARCHED_CHARACTERS,
} from "@/queries/Characters/CharacterMainPage";

import { CharactersPages } from "@/types/character";

interface CharactersData {
  Page: {
    characters: CharactersPages[];
  };
}

export const fetchCharactersBirthdays = async (): Promise<
  CharactersPages[]
> => {
  const { data } = await client.query<CharactersData>({
    query: FETCH_CHARACTERS_BIRTHDAYS,
  });
  return data.Page.characters;
};

export const fetchMostFavoritedCharacters = async (): Promise<
  CharactersPages[]
> => {
  const { data } = await client.query<CharactersData>({
    query: FETCH_MOST_FAVORITES_CHARACTERS,
  });
  return data.Page.characters;
};

export const fetchResearchedCharacters = async (
  parameter: string | null
): Promise<CharactersPages[]> => {
  const { data } = await client.query<CharactersData>({
    query: FETCH_RESEARCHED_CHARACTERS,
    variables: { search: parameter },
  });
  return data.Page.characters;
};
