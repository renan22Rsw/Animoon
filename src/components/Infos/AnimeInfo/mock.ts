interface mockTypes {
  format: string;
  duration: number;
  status: string;
  seasonYear: number;
  season: string;
  averageScore: number;
  meanScore: number;
  popularity: number;
  favourites: number;
  source: string;
  genres: string[];
}

export const mock: mockTypes = {
  duration: 24,
  averageScore: 85,
  meanScore: 88,
  favourites: 500,
  format: "TV",
  genres: ["comedy", "horror"],
  popularity: 1000,
  season: "winter",
  seasonYear: 2024,
  source: "Light Novel",
  status: "Airing",
};
