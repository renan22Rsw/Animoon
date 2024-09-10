import { fetchSearchAnimeByGenre } from "@/api/AnimeMainPage";
import { mock } from "../mock";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import { renderHook, waitFor } from "@testing-library/react";
import useSearchAnimeGenre from "./useSearchGenre";

jest.mock("../../../api/AnimeMainPage", () => ({
  fetchSearchAnimeByGenre: jest.fn(),
}));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const wrapper = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe("useSearchGenre hook", () => {
  afterEach(() => {
    queryClient.clear();
    jest.clearAllMocks();
  });

  it("should return datas from api response", async () => {
    (fetchSearchAnimeByGenre as jest.Mock).mockResolvedValue(mock);

    const { result } = renderHook(
      () => useSearchAnimeGenre("Naruto", "action"),
      { wrapper }
    );

    expect(result.current.seachGenreAnimeIsLoading).toBe(true);
    await waitFor(() => {
      expect(result.current.seachGenreAnimeIsLoading).toBe(false);
      expect(result.current.searchGenreAnime).toEqual(mock);
      expect(result.current.seachGenreAnimeIsError).toBe(false);
    });
  });

  it("should load if datas from api response is loading", async () => {
    (fetchSearchAnimeByGenre as jest.Mock).mockResolvedValue(mock);

    const { result } = renderHook(
      () => useSearchAnimeGenre("Another", "Horror"),
      { wrapper }
    );
    await waitFor(() =>
      expect(result.current.seachGenreAnimeIsLoading).toBe(true)
    );
  });

  it("should return an error message if api response is not working", async () => {
    (fetchSearchAnimeByGenre as jest.Mock).mockRejectedValue(
      new Error("the api is not working")
    );
    const { result } = renderHook(
      () => useSearchAnimeGenre("not found anime", "none"),
      { wrapper }
    );

    expect(result.current.seachGenreAnimeIsLoading).toBe(true);

    await waitFor(() => {
      expect(result.current.seachGenreAnimeIsLoading).toBe(false);
      expect(result.current.searchGenreAnime).toBeUndefined();
      expect(result.current.seachGenreAnimeIsError).toBe(true);
    });
  });
});
