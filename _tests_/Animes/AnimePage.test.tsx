import {
  fetchGenresAnimes,
  fetchNextSeason,
  fetchResearchedAnimes,
  fetchSearchAnimeByGenre,
  fetchSeasonsAnimes,
  fetchTopAnimes,
} from "@/api/AnimeMainPage";

import AnimePage from "@/components/Contents/Animes/AnimesContentPage";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen, waitFor } from "@testing-library/react";
import { mockAnimes, topAnimesMock } from "./mock";

jest.mock("../../src/api/AnimeMainPage", () => ({
  fetchSeasonsAnimes: jest.fn(),
  fetchNextSeason: jest.fn(),
  fetchTopAnimes: jest.fn(),
  fetchResearchedAnimes: jest.fn(),
  fetchGenresAnimes: jest.fn(),
  fetchSearchAnimeByGenre: jest.fn(),
}));

const client = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

describe("AnimePage", () => {
  beforeEach(() => {
    (fetchSeasonsAnimes as jest.Mock).mockResolvedValue(mockAnimes);
    (fetchNextSeason as jest.Mock).mockResolvedValue(mockAnimes);
    (fetchTopAnimes as jest.Mock).mockResolvedValue(topAnimesMock);
    (fetchResearchedAnimes as jest.Mock).mockResolvedValue(mockAnimes);
    (fetchSearchAnimeByGenre as jest.Mock).mockResolvedValue(mockAnimes);
    (fetchGenresAnimes as jest.Mock).mockResolvedValue(mockAnimes);
  });

  afterEach(() => {
    client.clear();
    jest.clearAllMocks();
  });

  it("should render AnimePage datas", async () => {
    render(
      <QueryClientProvider client={client}>
        <AnimePage />
      </QueryClientProvider>
    );

    await waitFor(() => {
      expect(screen.getByText("Trending Now")).toBeInTheDocument();
      expect(screen.getByText("UpComing Next Season")).toBeInTheDocument();
      const topTitles = screen.getAllByText("Top 10 Animes");
      expect(topTitles[0]).toBeInTheDocument();
      expect(topTitles[1]).toBeInTheDocument();

      const animesTitles = screen.getAllByText("Anime Test");
      expect(animesTitles[0]).toBeInTheDocument();
      expect(animesTitles[1]).toBeInTheDocument();

      const images = screen.getAllByRole("img");
      expect(images[0]).toBeInTheDocument();
      expect(images[1]).toBeInTheDocument();
      expect(images[2]).toBeInTheDocument();
      expect(images[3]).toBeInTheDocument();

      //top-columns

      const columnsTitles = screen.getAllByText("Mock Anime Titles");
      expect(columnsTitles[0]).toBeInTheDocument();
      expect(columnsTitles[1]).toBeInTheDocument();

      expect(screen.getByAltText("Image-Column")).toBeInTheDocument();
      expect(screen.getByText("1°")).toBeInTheDocument();
      expect(screen.getByText("TV")).toBeInTheDocument();
      expect(screen.getByText("ANIME")).toBeInTheDocument();
      expect(screen.getByText("WINTER 2013")).toBeInTheDocument();
      expect(screen.getByText("150000")).toBeInTheDocument();
      expect(screen.getByText("25 ep")).toBeInTheDocument();
      expect(screen.getByText("FINISHED")).toBeInTheDocument();
    });
  });

  it("should return loading component", async () => {
    render(
      <QueryClientProvider client={client}>
        <AnimePage />
      </QueryClientProvider>
    );
    await waitFor(() => {
      expect(screen.getByTestId("loading-component")).toBeInTheDocument();
    });
  });

  it("should return api is not working component ", async () => {
    (fetchSeasonsAnimes as jest.Mock).mockRejectedValue(new Error());
    (fetchNextSeason as jest.Mock).mockRejectedValue(new Error());
    (fetchTopAnimes as jest.Mock).mockRejectedValue(new Error());
    (fetchResearchedAnimes as jest.Mock).mockResolvedValue(new Error());
    (fetchSearchAnimeByGenre as jest.Mock).mockResolvedValue(new Error());
    (fetchGenresAnimes as jest.Mock).mockResolvedValue(new Error());

    render(
      <QueryClientProvider client={client}>
        <AnimePage />
      </QueryClientProvider>
    );
    await waitFor(() => {
      expect(
        screen.getByText(
          "Apologies, but it seems the API is currently unavailable. Please try again later."
        )
      ).toBeInTheDocument();

      expect(screen.getByRole("img")).toBeInTheDocument();
    });
  });
});
