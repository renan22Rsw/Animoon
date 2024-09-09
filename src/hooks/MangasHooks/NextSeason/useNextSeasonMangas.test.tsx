import { ReactNode } from "react";
import { mock } from "../mock";
import { renderHook, waitFor } from "@testing-library/react";
import useNextSeasonMangas from "./useNextSeasonMangas";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { fetchNextSeasonMangas } from "@/api/MangaMainPage";

jest.mock("../../../api/MangaMainPage", () => ({
  fetchNextSeasonMangas: jest.fn(),
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

describe("useNextSeasonMangas hook", () => {
  afterEach(() => {
    queryClient.clear();
    jest.clearAllMocks();
  });

  it("should return datas from api response", async () => {
    (fetchNextSeasonMangas as jest.Mock).mockResolvedValue(mock);
    const { result } = renderHook(() => useNextSeasonMangas(), { wrapper });

    expect(result.current.nextSeasonMangaIsLoading).toBe(true);

    await waitFor(() => {
      expect(result.current.nextSeasonMangaIsLoading).toBe(false);
      expect(result.current.nextSeasonManga).toEqual(mock);
      expect(result.current.nextSeasonMangaIsError).toBe(null);
    });
  });

  it("should load if api response is loading", async () => {
    (fetchNextSeasonMangas as jest.Mock).mockResolvedValue(mock);

    const { result } = renderHook(() => useNextSeasonMangas(), { wrapper });

    (await waitFor(() => expect(result.current.nextSeasonMangaIsLoading))).toBe(
      true
    );
  });

  it("should return an error message if api response is not working", async () => {
    (fetchNextSeasonMangas as jest.Mock).mockRejectedValue(
      new Error("api is not working...")
    );
    const { result } = renderHook(() => useNextSeasonMangas(), { wrapper });

    expect(result.current.nextSeasonMangaIsLoading).toBe(true);

    await waitFor(() => {
      expect(result.current.nextSeasonMangaIsLoading).toBe(false);
      expect(result.current.nextSeasonManga).toBeUndefined();
      expect(result.current.nextSeasonMangaIsError).toEqual(
        new Error("api is not working...")
      );
    });
  });
});
