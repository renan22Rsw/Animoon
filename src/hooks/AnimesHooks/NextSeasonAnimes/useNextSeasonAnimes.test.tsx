import { fetchNextSeason } from "@/api/AnimeMainPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import { mock } from "@/hooks/AnimesHooks/mock";
import { renderHook, waitFor } from "@testing-library/react";
import useNextSeason from "./useNextSeasonAnimes";

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

describe("useNextSeasonAnimes hook", () => {
  afterEach(() => {
    queryClient.clear();
    jest.clearAllMocks();
  });

  it("should return datas from api response", async () => {
    (fetchNextSeason as jest.Mock).mockResolvedValue(mock);

    const { result } = renderHook(() => useNextSeason(), { wrapper });

    expect(result.current.nextSeasonLoading).toBe(true);

    await waitFor(() => {
      expect(result.current.nextSeasonLoading).toBe(false);
      expect(result.current.nextSeason).toEqual(mock);
      expect(result.current.nextSeasonError).toBe(null);
    });
  });

  it("should load if datas from api response is loading", async () => {
    (fetchNextSeason as jest.Mock).mockResolvedValue(mock);
    const { result } = renderHook(() => useNextSeason(), { wrapper });

    await waitFor(() => expect(result.current.nextSeasonLoading).toBe(true));
  });

  it("should return an erro message if api response is not working", async () => {
    (fetchNextSeason as jest.Mock).mockRejectedValue(
      new Error("api is not working...")
    );
    const { result } = renderHook(() => useNextSeason(), { wrapper });

    expect(result.current.nextSeasonLoading).toBe(true);

    await waitFor(() => {
      expect(result.current.nextSeasonLoading).toBe(false);
      expect(result.current.nextSeason).toBeUndefined();
      expect(result.current.nextSeasonError).toEqual(
        new Error("api is not working...")
      );
    });
  });
});
