interface mockTypes {
  format: string;
  status: string;
  averageScore: number;
  meanScore: number;
  popularity: number;
  favourites: number;
  source: string;
  genres: string[];
}

export const mock: mockTypes = {
  averageScore: 80,
  meanScore: 85,
  favourites: 1200,
  format: "Manga",
  genres: ["action", "adventure"],
  popularity: 1000,
  source: "Original",
  status: "Releasing",
};
