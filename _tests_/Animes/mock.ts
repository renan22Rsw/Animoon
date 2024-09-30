export const mockAnimes = [
  {
    id: 1,
    title: { romaji: "Anime Test" },
    coverImage: { large: "https://example.com/image.jpg" },
  },
];

export const topAnimesMock = [
  {
    id: 1,
    title: {
      romaji: "Attack on Titan",
    },
    coverImage: {
      large: "https://example.com/attack-on-titan-cover.jpg",
    },
    rankings: [
      {
        id: 101,
      },
    ],
    episodes: 25,
    season: "WINTER",
    status: "FINISHED",
    seasonYear: 2013,
    type: "ANIME",
    favourites: 150000,
    format: "TV",
  },

  // Adicione mais animes aqui conforme necessário
];

export const mockAnimeInfo = {
  title: { romaji: "Test Anime" },
  description: "Test description",
  coverImage: { extraLarge: "/test-image.jpg" },
  trailer: { id: "test-trailer" },
  format: "TV",
  duration: 24,
  status: "FINISHED",
  season: "WINTER",
  seasonYear: 2021,
  averageScore: 80,
  meanScore: 75,
  popularity: 10000,
  favourites: 500,
  source: "MANGA",
  genres: ["Action", "Adventure"],
  characters: {
    edges: [
      {
        node: {
          id: 1,
          name: { userPreferred: "Character 1" },
          image: { medium: "/character1.jpg" },
        },
        role: "MAIN",
        voiceActors: [
          {
            id: 1,
            name: { userPreferred: "Voice Actor 1" },
            image: { medium: "/voice1.jpg" },
            languageV2: "Japanese",
          },
        ],
      },
    ],
  },
  staff: {
    nodes: [
      {
        id: 1,
        name: { userPreferred: "Staff 1" },
        image: { medium: "/staff1.jpg" },
        primaryOccupations: ["Director"],
      },
    ],
  },
  recommendations: {
    nodes: [
      {
        mediaRecommendation: {
          id: 1,
          title: { romaji: "Recommended Anime 1" },
          coverImage: { large: "/recommendation1.jpg" },
        },
      },
    ],
  },
};
