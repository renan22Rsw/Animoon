import { fetchCharactersById } from "@/api/CharacterInfoPage";
import SubPageHeader from "@/components/Header/SubHeader/SubPageHeader";

import { Characters } from "@/types/character";
import React from "react";

const CharacterInfo = async ({ params }: ParamId) => {
  const { id } = params;
  const data: Characters[] = await fetchCharactersById(id);
  const characters = data.map((character) => ({
    name: character.name.userPreferred,
    nativeName: character.name.native,
    alternativeName: character.name.alternative,
    age: character.age,
    image: character.image.large,
    gender: character.gender,
    month: character.dateOfBirth.month,
    day: character.dateOfBirth.day,
    bloodType: character.bloodType,
    description: character.description,
  }));

  const character = characters[0];

  return (
    <>
      <SubPageHeader
        name={character.name}
        nativeName={character.nativeName}
        alternativeName={character.alternativeName}
        age={character.age}
        image={character.image}
        gender={character.gender}
        month={character.month}
        day={character.day}
        bloodType={character.bloodType}
        description={character.description?.replace(
          /https?:\/\/[^\s]+|\[.*?\]|\(.*?\)|[\[\]_*~!\(\)]/g,
          ""
        )}
      />
    </>
  );
};

export default CharacterInfo;
