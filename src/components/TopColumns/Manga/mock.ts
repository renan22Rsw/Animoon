interface mockTypes {
  title: string;
  id?: number;
  rank: number;
  images: string;
  source: string;
  meanScore: number;
  favorites: number;
  type: string;
  status: string;
  chapters: null | number;
  volumes: null | number;
}

export const mock: mockTypes = {
  title: "Berserk",
  id: 30002,
  rank: 1,
  images: "http://example.com/anime-manga.jpg",
  source: "Manga",
  meanScore: 93,
  favorites: 32311,
  type: "Manga",
  status: "RELEASING",
  chapters: null,
  volumes: null,
};
