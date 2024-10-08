import { fetchTopMangas } from "@/api/MangaMainPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen, waitFor } from "@testing-library/react";
import { mockMangas } from "./mock";
import Top50Mangas from "@/components/Contents/Mangas/Top50Content";

jest.mock("../../src/api/MangaMainPage", () => ({
  fetchTopMangas: jest.fn(),
}));

const client = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

describe("Top mangas page", () => {
  afterEach(() => {
    client.clear();
    jest.clearAllMocks();
  });
  it("should reder datas from top mangas page", async () => {
    (fetchTopMangas as jest.Mock).mockResolvedValue(mockMangas);
    render(
      <QueryClientProvider client={client}>
        <Top50Mangas />
      </QueryClientProvider>
    );
    await waitFor(() => {
      expect(screen.getByText("Top 50 Mangas")).toBeInTheDocument();
      expect(screen.getByText("Mangas Test")).toBeInTheDocument();
      expect(screen.getByRole("img")).toBeInTheDocument();
      expect(screen.getByRole("link")).toBeInTheDocument();
    });
  });

  it("should return loading component if data is loading", async () => {
    (fetchTopMangas as jest.Mock).mockResolvedValue(mockMangas);
    render(
      <QueryClientProvider client={client}>
        <Top50Mangas />
      </QueryClientProvider>
    );

    await waitFor(() => {
      expect(screen.getByTestId("loading-component")).toBeInTheDocument();
    });
  });

  it("should return api is not working component", async () => {
    (fetchTopMangas as jest.Mock).mockRejectedValue(new Error());

    render(
      <QueryClientProvider client={client}>
        <Top50Mangas />
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
