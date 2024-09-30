import { fetchSeasonsMangas } from "@/api/MangaMainPage";
import TrendingMangas from "@/app/search/mangas/trending/page";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen, waitFor } from "@testing-library/react";
import { mockMangas } from "./mock";

jest.mock("../../src/api/MangaMainPage", () => ({
  fetchSeasonsMangas: jest.fn(),
}));

const client = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

describe("Trending mangas page", () => {
  afterEach(() => {
    client.clear();
    jest.clearAllMocks();
  });
  it("should reder datas from trending mangas page", async () => {
    (fetchSeasonsMangas as jest.Mock).mockResolvedValue(mockMangas);
    render(
      <QueryClientProvider client={client}>
        <TrendingMangas />
      </QueryClientProvider>
    );
    await waitFor(() => {
      expect(screen.getByText("Trending Mangas")).toBeInTheDocument();
      expect(screen.getByText("Mangas Test")).toBeInTheDocument();
      expect(screen.getByRole("img")).toBeInTheDocument();
      expect(screen.getByRole("link")).toBeInTheDocument();
    });
  });

  it("should return loading component if data is loading", async () => {
    (fetchSeasonsMangas as jest.Mock).mockResolvedValue(mockMangas);
    render(
      <QueryClientProvider client={client}>
        <TrendingMangas />
      </QueryClientProvider>
    );

    await waitFor(() => {
      expect(screen.getByTestId("loading-component")).toBeInTheDocument();
    });
  });

  it("should return api is not working component", async () => {
    (fetchSeasonsMangas as jest.Mock).mockRejectedValue(new Error());

    render(
      <QueryClientProvider client={client}>
        <TrendingMangas />
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
