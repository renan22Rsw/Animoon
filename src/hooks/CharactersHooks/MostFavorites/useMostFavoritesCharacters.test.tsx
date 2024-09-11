import { fetchMostFavoritedCharacters } from "@/api/CharacterMainPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import { mock } from "../mock";
import { renderHook, waitFor } from "@testing-library/react";
import useMostFavoritesCharacters from "./useMostFavoritesCharacters";

jest.mock("../../../api/CharacterMainPage", () => ({
  fetchMostFavoritedCharacters: jest.fn(),
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

describe("useMostFavoritesCharacters hook", () => {
  afterEach(() => {
    queryClient.clear();
    jest.clearAllMocks();
  });
  it("should return datas from api response", async () => {
    (fetchMostFavoritedCharacters as jest.Mock).mockResolvedValue(mock);

    const { result } = renderHook(() => useMostFavoritesCharacters(), {
      wrapper,
    });

    expect(result.current.mostFavoritesCharacterIsLoading).toBe(true);
  });

  it("should load if datas from api response is loading", async () => {
    (fetchMostFavoritedCharacters as jest.Mock).mockResolvedValue(mock);
    const { result } = renderHook(() => useMostFavoritesCharacters(), {
      wrapper,
    });
    await waitFor(() =>
      expect(result.current.mostFavoritesCharacterIsLoading).toBe(true)
    );
  });

  it("should return an error message if api response is not working", async () => {
    (fetchMostFavoritedCharacters as jest.Mock).mockRejectedValue(
      new Error("api is not working...")
    );
    const { result } = renderHook(() => useMostFavoritesCharacters(), {
      wrapper,
    });
    expect(result.current.mostFavoritesCharacterIsLoading).toBe(true);

    await waitFor(() => {
      expect(result.current.mostFavoritesCharacterIsLoading).toBe(false);
      expect(result.current.mostFavoritesCharacter).toBeUndefined();
      expect(result.current.mostFavoritesCharacterIsError).toBe(true);
    });
  });
});
