import {
  fetchGenresAnimes,
  fetchNextSeason,
  fetchResearchedAnimes,
  fetchSearchAnimeByGenre,
  fetchSeasonsAnimes,
  fetchTopAnimes,
} from "@/api/AnimeMainPage";
import AnimePage from "@/app/search/animes/page";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { mockAnimes, topAnimesMock } from "./mock";
import { useRouter } from "next/navigation";
import userEvent from "@testing-library/user-event";

jest.mock("../../src/app/ApoloClient", () => ({
  client: jest.fn(),
}));

jest.mock("../../src/api/AnimeMainPage", () => ({
  fetchSeasonsAnimes: jest.fn(),
  fetchNextSeason: jest.fn(),
  fetchTopAnimes: jest.fn(),
  fetchResearchedAnimes: jest.fn(),
  fetchGenresAnimes: jest.fn(),
  fetchSearchAnimeByGenre: jest.fn(),
}));

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
  useSearchParams: jest.fn(),
  usePathname: jest.fn(),
}));

const client = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

describe("AnimePage", () => {
  afterEach(() => {
    client.clear();
    jest.clearAllMocks();
  });

  it("should render AnimePage datas", async () => {
    (fetchSeasonsAnimes as jest.Mock).mockResolvedValue(mockAnimes);
    (fetchNextSeason as jest.Mock).mockResolvedValue(mockAnimes);
    (fetchTopAnimes as jest.Mock).mockResolvedValue(topAnimesMock);
    (fetchResearchedAnimes as jest.Mock).mockResolvedValue(mockAnimes);
    (fetchSearchAnimeByGenre as jest.Mock).mockResolvedValue(mockAnimes);
    (fetchGenresAnimes as jest.Mock).mockResolvedValue(mockAnimes);

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
    });
  });

  it("should return loading component", async () => {
    (fetchSeasonsAnimes as jest.Mock).mockResolvedValue(mockAnimes);
    (fetchNextSeason as jest.Mock).mockResolvedValue(mockAnimes);
    (fetchTopAnimes as jest.Mock).mockResolvedValue(topAnimesMock);
    (fetchResearchedAnimes as jest.Mock).mockResolvedValue(mockAnimes);
    (fetchSearchAnimeByGenre as jest.Mock).mockResolvedValue(mockAnimes);
    (fetchGenresAnimes as jest.Mock).mockResolvedValue(mockAnimes);

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
