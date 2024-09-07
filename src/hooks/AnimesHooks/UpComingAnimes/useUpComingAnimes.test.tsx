import { fetchNextSeason } from "@/api/AnimeMainPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import { mock } from "@/hooks/AnimesHooks/mock";
import { renderHook, waitFor } from "@testing-library/react";
import useNextSeason from "./useUpComingAnimes";

jest.mock("../../../api/AnimeMainPage", () => ({
  fetchNextSeason: jest.fn(),
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

describe("useUpComingAnimes hook", () => {
  afterEach(() => {
    queryClient.clear();
    jest.clearAllMocks();
  });

  it("should return up coming animes data if api is working", async () => {
    (fetchNextSeason as jest.Mock).mockResolvedValue(mock);

    const { result } = renderHook(() => useNextSeason(), { wrapper });

    expect(result.current.nextSeasonLoading).toBe(true);

    await waitFor(() => {
      expect(result.current.nextSeasonLoading).toBe(false);
      expect(result.current.nextSeason).toEqual(mock);
      expect(result.current.nextSeasonError).toBe(null);
    });
  });

  it("should load if next seasson animes api is loading", async () => {
    (fetchNextSeason as jest.Mock).mockResolvedValue(mock);
    const { result } = renderHook(() => useNextSeason(), { wrapper });

    await waitFor(() => expect(result.current.nextSeasonLoading).toBe(true));
  });

  it("should return an erro if next season animes api is not working", async () => {
    (fetchNextSeason as jest.Mock).mockRejectedValue(
      new Error("the api is not working...")
    );
    const { result } = renderHook(() => useNextSeason(), { wrapper });

    expect(result.current.nextSeasonLoading).toBe(true);

    await waitFor(() => {
      expect(result.current.nextSeasonLoading).toBe(false);
      expect(result.current.nextSeason).toBeUndefined();
      expect(result.current.nextSeasonError).toEqual(
        new Error("the api is not working...")
      );
    });
  });
});
