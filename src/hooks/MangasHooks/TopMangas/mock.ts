export const mock = {
  Page: {
    media: [
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
        chapters: 139,
        volumes: 34,
        season: "WINTER",
        status: "FINISHED",
        seasonYear: 2013,
        type: "MANGA",
        favourites: 120000,
        format: "MANGA",
        meanScore: 90,
      },
      {
        id: 2,
        title: {
          romaji: "One Piece",
        },
        coverImage: {
          large: "https://example.com/one-piece-cover.jpg",
        },
        rankings: [
          {
            id: 102,
          },
        ],
        chapters: 1000,
        volumes: 98,
        season: "SPRING",
        status: "ONGOING",
        seasonYear: 1997,
        type: "MANGA",
        favourites: 150000,
        format: "MANGA",
        meanScore: 88,
      },
      // Adicione mais mangas se necessário
    ],
  },
};
