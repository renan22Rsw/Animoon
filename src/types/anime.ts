export interface AnimePage {
  id: number;
  title: {
    romaji: string;
  };
  coverImage: {
    large: string;
  };

  description: string;
}

export interface topAnimes {
  id: number;
  title: {
    romaji: string;
  };
  coverImage: {
    large: string;
  };

  episodes: number;
  season: string;
  status: string;
  seasonYear: number;
  type: string;
  favourites: number;
  format: string;
}

interface AnimeCharacter {
  role: string;
  voiceActors: AnimeVoices[];

  node: {
    id: number;
    name: {
      userPreferred: string;
    };
    image: {
      medium: string;
    };
  };
}

interface AnimeStaff {
  id: number;
  name: {
    userPreferred: string;
  };
  image: {
    medium: string;
  };
  primaryOccupations: string;
}

interface AnimeVoices {
  id: number;
  name: {
    userPreferred: string;
  };
  image: {
    medium: string;
  };
  languageV2: string;
}

interface AnimeRecommendations {
  mediaRecommendation: {
    id: number;
    title: {
      romaji: string;
    };
    coverImage: {
      large: string;
    };
  };
}

export interface AnimeInfo {
  title: {
    romaji: string;
  };
  description: string;

  format: string;
  duration: number;
  status: string;
  season: string;
  seasonYear: number;
  averageScore: number;
  meanScore: number;
  popularity: number;
  favourites: number;

  source: string;
  genres: string[];

  coverImage: {
    extraLarge: string;
  };

  characters: {
    edges: AnimeCharacter[];
  };

  staff: {
    nodes: AnimeStaff[];
  };

  trailer: {
    id: string;
  };

  recommendations: {
    nodes: AnimeRecommendations[];
  };
}
