interface mockAnimesAndMangas {
  id: number;
  title: {
    romaji: string;
  };
  coverImage: {
    large: string;
  };
}

interface mockCharacter {
  id: number;
  name: {
    full: string;
  };
  image: {
    large: string;
  };
}

export const mockAnimesAndMangasMainPage: mockAnimesAndMangas = {
  id: 1,
  title: { romaji: "Akame ga kill" },
  coverImage: { large: "https://example.com/anime-image.jpg" },
};

export const mockCharacterMainPage: mockCharacter = {
  id: 2,
  name: { full: "Akame" },
  image: { large: "https://example.com/character-image.jpg" },
};
