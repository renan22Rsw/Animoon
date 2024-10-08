import { fetchPopularMangas } from "@/api/MangaMainPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen, waitFor } from "@testing-library/react";
import { mockMangas } from "./mock";
import AllTimePopular from "@/components/Contents/Mangas/PopularMangasContent";

jest.mock("../../src/api/MangaMainPage", () => ({
  fetchPopularMangas: jest.fn(),
}));

const client = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

describe("All Time Popular mangas page", () => {
  afterEach(() => {
    client.clear();
    jest.clearAllMocks();
  });
  it("should reder datas from all time popular mangas page", async () => {
    (fetchPopularMangas as jest.Mock).mockResolvedValue(mockMangas);
    render(
      <QueryClientProvider client={client}>
        <AllTimePopular />
      </QueryClientProvider>
    );
    await waitFor(() => {
      expect(screen.getByText("All Time Popular")).toBeInTheDocument();
      expect(screen.getByText("Mangas Test")).toBeInTheDocument();
      expect(screen.getByRole("img")).toBeInTheDocument();
      expect(screen.getByRole("link")).toBeInTheDocument();
    });
  });

  it("should return loading component if data is loading", async () => {
    (fetchPopularMangas as jest.Mock).mockResolvedValue(mockMangas);
    render(
      <QueryClientProvider client={client}>
        <AllTimePopular />
      </QueryClientProvider>
    );

    await waitFor(() => {
      expect(screen.getByTestId("loading-component")).toBeInTheDocument();
    });
  });

  it("should return api is not working component", async () => {
    (fetchPopularMangas as jest.Mock).mockRejectedValue(new Error());

    render(
      <QueryClientProvider client={client}>
        <AllTimePopular />
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
