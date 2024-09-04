interface mockTypes {
  id: number;
  name: string;
  image: string;
  role: string;
  voices: {
    id: number;
    name: string;
    image: string;
    language: string;
  }[];
}

export const mock: mockTypes = {
  id: 1,
  name: "Naruto",
  image: "https://example.com/character-image.jpg",
  role: "Main",
  voices: [
    {
      id: 1,
      name: "Junko Takeuch",
      image: "https://example.com/voices-image.jpg",
      language: "Japanease",
    },
  ],
};
