import { fetchSearchMangasByGenre } from "@/api/MangaMainPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import { mock } from "../mock";
import { renderHook, waitFor } from "@testing-library/react";
import useSearchGenreManga from "./useSearchMangaGenre";

jest.mock("../../../api/MangaMainPage", () => ({
  fetchSearchMangasByGenre: jest.fn(),
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

describe("useSearchMangaGenre hook", () => {
  it("should return api response datas", async () => {
    (fetchSearchMangasByGenre as jest.Mock).mockResolvedValue(mock);
    const { result } = renderHook(
      () => useSearchGenreManga("Another", "Horror"),
      { wrapper }
    );
    expect(result.current.seachGenreMangaIsLoading).toBe(true);

    await waitFor(() => {
      expect(result.current.seachGenreMangaIsLoading).toBe(false);
      expect(result.current.searchGenreManga).toEqual(mock);
      expect(result.current.seachGenreMangaIsError).toBe(false);
    });
  });

  it("should load if api response is loading", async () => {
    (fetchSearchMangasByGenre as jest.Mock).mockResolvedValue(mock);
    const { result } = renderHook(
      () => useSearchGenreManga("Toradora", "Romance"),
      { wrapper }
    );

    await waitFor(() => {
      expect(result.current.seachGenreMangaIsLoading).toBe(true);
    });
  });

  it("should return an error message if api response is not working", async () => {
    (fetchSearchMangasByGenre as jest.Mock).mockRejectedValue(
      new Error("api is not working...")
    );

    const { result } = renderHook(() => useSearchGenreManga("Error", "Error"), {
      wrapper,
    });

    expect(result.current.seachGenreMangaIsLoading).toBe(true);
    await waitFor(() => {
      expect(result.current.seachGenreMangaIsLoading).toBe(false);
      expect(result.current.searchGenreManga).toBeUndefined();
      expect(result.current.seachGenreMangaIsError).toBe(true);
    });
  });
});
