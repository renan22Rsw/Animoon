export interface CharactersPages {
  id: number;
  name: {
    full: string;
  };
  image: {
    large: string;
  };
}

export interface CharacterInfos {
  id: number;
  name: {
    userPreferred: string;
    native: string;
    alternative: string[];
  };
  age: string;
  gender: string;

  dateOfBirth: {
    month: number;
    day: number;
  };
  description: string;
  bloodType: string;

  image: {
    large: string;
  };
}
