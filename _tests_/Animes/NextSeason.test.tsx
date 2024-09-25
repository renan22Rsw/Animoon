import { fetchNextSeason, fetchSeasonsAnimes } from "@/api/AnimeMainPage";
import TrendingAnimes from "@/app/search/animes/trending/page";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen, waitFor } from "@testing-library/react";
import { mockAnimes } from "./mock";
import NextSeasonAnimes from "@/app/search/animes/next_season/page";

jest.mock("../../src/api/AnimeMainPage", () => ({
  fetchNextSeason: jest.fn(),
}));

const client = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

describe("Next season animes page", () => {
  afterEach(() => {
    client.clear();
    jest.clearAllMocks();
  });

  it("should reder datas from next Season page", async () => {
    (fetchNextSeason as jest.Mock).mockResolvedValue(mockAnimes);
    render(
      <QueryClientProvider client={client}>
        <NextSeasonAnimes />
      </QueryClientProvider>
    );
    await waitFor(() => {
      expect(screen.getByText("Up Coming Next Season")).toBeInTheDocument();
      expect(screen.getByText("Anime Test")).toBeInTheDocument();
      expect(screen.getByRole("img")).toBeInTheDocument();
      expect(screen.getByRole("link")).toBeInTheDocument();
    });
  });

  it("should return loading component if data is loading", async () => {
    (fetchNextSeason as jest.Mock).mockResolvedValue(mockAnimes);

    render(
      <QueryClientProvider client={client}>
        <TrendingAnimes />
      </QueryClientProvider>
    );

    await waitFor(() => {
      expect(screen.getByTestId("loading-component")).toBeInTheDocument();
    });
  });

  it("should return api is not working component", async () => {
    (fetchNextSeason as jest.Mock).mockRejectedValue(new Error());

    render(
      <QueryClientProvider client={client}>
        <TrendingAnimes />
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
