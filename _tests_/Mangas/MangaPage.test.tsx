import {
  fetchSeasonsMangas,
  fetchPopularMangas,
  fetchTopMangas,
  fetchResearchedMangas,
  fetchGenresMangas,
  fetchSearchMangasByGenre,
} from "@/api/MangaMainPage";
import { mockMangas, mockTopMangas } from "./mock";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen, waitFor } from "@testing-library/react";
import MangaPage from "@/components/Contents/Mangas/MangasContentPage";

jest.mock("../../src/api/MangaMainPage", () => ({
  fetchSeasonsMangas: jest.fn(),
  fetchPopularMangas: jest.fn(),
  fetchTopMangas: jest.fn(),
  fetchResearchedMangas: jest.fn(),
  fetchGenresMangas: jest.fn(),
  fetchSearchMangasByGenre: jest.fn(),
}));

const client = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

describe("MangaPage", () => {
  beforeEach(() => {
    (fetchSeasonsMangas as jest.Mock).mockResolvedValue(mockMangas);
    (fetchPopularMangas as jest.Mock).mockResolvedValue(mockMangas);
    (fetchTopMangas as jest.Mock).mockResolvedValue(mockTopMangas);
    (fetchResearchedMangas as jest.Mock).mockResolvedValue(mockMangas);
    (fetchGenresMangas as jest.Mock).mockResolvedValue(mockMangas);
    (fetchSearchMangasByGenre as jest.Mock).mockResolvedValue(mockMangas);
  });

  afterEach(() => {
    client.clear();
    jest.clearAllMocks();
  });

  it("should render MangaPage datas", async () => {
    render(
      <QueryClientProvider client={client}>
        <MangaPage />
      </QueryClientProvider>
    );
    await waitFor(() => {
      expect(screen.getByText("Trending Now")).toBeInTheDocument();
      expect(screen.getByText("All Time Popular")).toBeInTheDocument();
      const topTitles = screen.getAllByText("Top 10 Mangas");
      expect(topTitles[0]).toBeInTheDocument();
      expect(topTitles[1]).toBeInTheDocument();

      const mangasTitles = screen.getAllByText("Mangas Test");
      expect(mangasTitles[0]).toBeInTheDocument();
      expect(mangasTitles[1]).toBeInTheDocument();

      const images = screen.getAllByRole("img");
      expect(images[0]).toBeInTheDocument();
      expect(images[1]).toBeInTheDocument();
      expect(images[2]).toBeInTheDocument();
      expect(images[3]).toBeInTheDocument();

      const columnsTitles = screen.getAllByText("Mock Manga Titles");
      expect(columnsTitles[0]).toBeInTheDocument();
      expect(columnsTitles[1]).toBeInTheDocument();
      expect(screen.getByAltText("Image-Column")).toBeInTheDocument();

      expect(screen.getByText(mockTopMangas[0].format)).toBeInTheDocument();
      expect(screen.getByText(mockTopMangas[0].favourites)).toBeInTheDocument();
      expect(screen.getByText(mockTopMangas[0].status)).toBeInTheDocument();

      expect(
        screen.getByText(mockTopMangas[0].meanScore + "%")
      ).toBeInTheDocument();

      expect(
        screen.getByText(mockTopMangas[0].volumes + " vol")
      ).toBeInTheDocument();

      expect(
        screen.getByText(mockTopMangas[0].chapters + " ch")
      ).toBeInTheDocument();
    });
  });

  it("should return loading component", async () => {
    render(
      <QueryClientProvider client={client}>
        <MangaPage />
      </QueryClientProvider>
    );
    await waitFor(() => {
      expect(screen.getByTestId("loading-component")).toBeInTheDocument();
    });
  });

  it("should return api is not working component ", async () => {
    (fetchSeasonsMangas as jest.Mock).mockRejectedValue(new Error());
    (fetchPopularMangas as jest.Mock).mockRejectedValue(new Error());
    (fetchTopMangas as jest.Mock).mockRejectedValue(new Error());
    (fetchResearchedMangas as jest.Mock).mockResolvedValue(new Error());
    (fetchGenresMangas as jest.Mock).mockResolvedValue(new Error());
    (fetchSearchMangasByGenre as jest.Mock).mockResolvedValue(new Error());

    render(
      <QueryClientProvider client={client}>
        <MangaPage />
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
