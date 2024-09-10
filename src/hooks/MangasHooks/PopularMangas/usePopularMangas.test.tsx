import { ReactNode } from "react";
import { mock } from "../mock";
import { renderHook, waitFor } from "@testing-library/react";
import usePopularMangas from "./usePopularMangas";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { fetchPopularMangas } from "@/api/MangaMainPage";

jest.mock("../../../api/MangaMainPage", () => ({
  fetchPopularMangas: jest.fn(),
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

describe("usePopularMangas hook", () => {
  afterEach(() => {
    queryClient.clear();
    jest.clearAllMocks();
  });

  it("should return datas from api response", async () => {
    (fetchPopularMangas as jest.Mock).mockResolvedValue(mock);
    const { result } = renderHook(() => usePopularMangas(), { wrapper });

    expect(result.current.popularMangasIsLoading).toBe(true);

    await waitFor(() => {
      expect(result.current.popularMangasIsLoading).toBe(false);
      expect(result.current.popularMangas).toEqual(mock);
      expect(result.current.popularMangasIsError).toBe(null);
    });
  });

  it("should load if api response is loading", async () => {
    (fetchPopularMangas as jest.Mock).mockResolvedValue(mock);

    const { result } = renderHook(() => usePopularMangas(), { wrapper });

    (await waitFor(() => expect(result.current.popularMangasIsLoading))).toBe(
      true
    );
  });

  it("should return an error message if api response is not working", async () => {
    (fetchPopularMangas as jest.Mock).mockRejectedValue(
      new Error("api is not working...")
    );
    const { result } = renderHook(() => usePopularMangas(), { wrapper });

    expect(result.current.popularMangasIsLoading).toBe(true);

    await waitFor(() => {
      expect(result.current.popularMangasIsLoading).toBe(false);
      expect(result.current.popularMangas).toBeUndefined();
      expect(result.current.popularMangasIsError).toEqual(
        new Error("api is not working...")
      );
    });
  });
});
