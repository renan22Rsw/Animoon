import { client } from "@/app/ApoloClient";
import {
  FETCH_CHARACTERS_BIRTHDAYS,
  FETCH_MOST_FAVORITES_CHARACTERS,
  FETCH_RESEARCHED_CHARACTERS,
} from "@/queries/Characters/CharacterMainPage";

import { charactersPages } from "@/types/character";

interface CharactersData {
  Page: {
    characters: charactersPages[];
  };
}

export const fetchCharactersBirthdays = async (): Promise<
  charactersPages[]
> => {
  const { data } = await client.query<CharactersData>({
    query: FETCH_CHARACTERS_BIRTHDAYS,
  });
  return data.Page.characters;
};

export const fetchMostFavoritedCharacters = async (): Promise<
  charactersPages[]
> => {
  const { data } = await client.query<CharactersData>({
    query: FETCH_MOST_FAVORITES_CHARACTERS,
  });
  return data.Page.characters;
};

export const fetchResearchedCharacters = async (
  parameter: string | null
): Promise<charactersPages[]> => {
  const { data } = await client.query<CharactersData>({
    query: FETCH_RESEARCHED_CHARACTERS,
    variables: { search: parameter },
  });
  return data.Page.characters;
};
