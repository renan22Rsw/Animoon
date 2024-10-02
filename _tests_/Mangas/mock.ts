export const mockMangas = [
  {
    id: 1,
    title: { romaji: "Mangas Test" },
    coverImage: { large: "https://example.com/image.jpg" },
  },
];

export const mockTopMangas = [
  {
    id: 1,
    title: {
      romaji: "Mock Manga Titles",
    },
    coverImage: {
      large: "https://example.com/mock-image.jpg",
    },
    rankings: [
      {
        id: 2001,
      },
    ],
    chapters: 100,
    volumes: 20,
    status: "RELEASING",
    type: "MANGA",
    favourites: 10345,
    format: "MANGA",
    meanScore: 90,
  },
];

export const mockMangaInfo = {
  title: { romaji: "Test Manga" },
  description: "Test description for manga",
  coverImage: { large: "/test-manga-image.jpg" },
  format: "MANGA",
  status: "RELEASING",
  averageScore: 85,
  meanScore: 82,
  popularity: 9500,
  favourites: 800,
  source: "Light Novel",
  genres: ["Drama", "Fantasy"],
  characters: {
    edges: [
      {
        node: {
          id: 1,
          name: { userPreferred: "Manga Character 1" },
          image: { medium: "/manga-character1.jpg" },
        },
        role: "MAIN",
      },
    ],
  },
  staff: {
    nodes: [
      {
        id: 1,
        name: { userPreferred: "Manga Author 1" },
        image: { medium: "/manga-author1.jpg" },
        primaryOccupations: ["Author"],
      },
    ],
  },
  trailer: { id: "manga-trailer-test" },
  recommendations: {
    nodes: [
      {
        mediaRecommendation: {
          id: 1,
          title: { romaji: "Recommended Manga 1" },
          coverImage: { large: "/recommendation-manga1.jpg" },
        },
      },
    ],
  },
};
