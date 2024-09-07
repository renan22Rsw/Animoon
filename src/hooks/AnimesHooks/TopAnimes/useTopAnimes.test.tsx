import { renderHook, waitFor } from "@testing-library/react";
import { fetchTopAnimes } from "@/api/AnimeMainPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import { mock } from "./mock";
import useTopAnimes from "./useTopAnimes";

jest.mock("../../../api/AnimeMainPage", () => ({
  fetchTopAnimes: jest.fn(),
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

describe("useTopAnimes hook", () => {
  afterEach(() => {
    queryClient.clear();
    jest.clearAllMocks();
  });

  it("should return top animes data if api is working", async () => {
    (fetchTopAnimes as jest.Mock).mockResolvedValue(mock);

    const { result } = renderHook(() => useTopAnimes(), { wrapper });

    expect(result.current.topAnimesIsloading).toBe(true);

    await waitFor(() => {
      expect(result.current.topAnimesIsloading).toBe(false);
      expect(result.current.topAnimes).toEqual(mock);
      expect(result.current.topAnimesError).toBe(null);
    });
  });

  it("should load if top animes api is loading", async () => {
    const { result } = renderHook(() => useTopAnimes(), { wrapper });

    await waitFor(() => expect(result.current.topAnimesIsloading).toBe(true));
  });

  it("should return an erro if top animes api is not working", async () => {
    (fetchTopAnimes as jest.Mock).mockRejectedValue(
      new Error("the api is not working...")
    );
    const { result } = renderHook(() => useTopAnimes(), { wrapper });

    expect(result.current.topAnimesIsloading).toBe(true);

    await waitFor(() => {
      expect(result.current.topAnimesIsloading).toBe(false);
      expect(result.current.topAnimes).toBeUndefined();
      expect(result.current.topAnimesError).toEqual(
        new Error("the api is not working...")
      );
    });
  });
});
