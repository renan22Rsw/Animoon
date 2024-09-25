import { fetchSeasonsAnimes } from "@/api/AnimeMainPage";
import TrendingAnimes from "@/app/search/animes/trending/page";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen, waitFor } from "@testing-library/react";
import { mockAnimes } from "./mock";

jest.mock("../../src/api/AnimeMainPage", () => ({
  fetchSeasonsAnimes: jest.fn(),
}));

const client = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

describe("trending page", () => {
  afterEach(() => {
    client.clear();
    jest.clearAllMocks();
  });

  it("should reder datas from trending page", async () => {
    (fetchSeasonsAnimes as jest.Mock).mockResolvedValue(mockAnimes);
    render(
      <QueryClientProvider client={client}>
        <TrendingAnimes />
      </QueryClientProvider>
    );
    await waitFor(() => {
      expect(screen.getByText("Trending Animes")).toBeInTheDocument();
      expect(screen.getByText("Anime Test")).toBeInTheDocument();
      expect(screen.getByRole("img")).toBeInTheDocument();
      expect(screen.getByRole("link")).toBeInTheDocument();
    });
  });

  it("should return loading component if data is loading", async () => {
    (fetchSeasonsAnimes as jest.Mock).mockResolvedValue(mockAnimes);

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
    (fetchSeasonsAnimes as jest.Mock).mockRejectedValue(new Error());

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
