import { fetchResearchedCharacters } from "@/api/CharacterMainPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import { mock } from "../mock";
import { renderHook, waitFor } from "@testing-library/react";
import useResearchedCharacter from "./useResearchedCharacter";

jest.mock("../../../api/CharacterMainPage", () => ({
  fetchResearchedCharacters: jest.fn(),
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

describe("useResearchedCharacter hook", () => {
  afterEach(() => {
    queryClient.clear();
    jest.clearAllMocks();
  });

  it("should return datas from api response", async () => {
    (fetchResearchedCharacters as jest.Mock).mockResolvedValue(mock);
    const { result } = renderHook(() => useResearchedCharacter("Naruto"), {
      wrapper,
    });
    expect(result.current.researchedCharacterIsLoading).toBe(true);

    await waitFor(() => {
      expect(result.current.researchedCharacterIsLoading).toBe(false);
      expect(result.current.researchedCharacter).toEqual(mock);
      expect(result.current.researchedCharacterIsError).toBe(false);
    });
  });

  it("should load if datas from api response is loading", async () => {
    (fetchResearchedCharacters as jest.Mock).mockResolvedValue(mock);
    const { result } = renderHook(() => useResearchedCharacter("Sasuke"), {
      wrapper,
    });
    await waitFor(() =>
      expect(result.current.researchedCharacterIsLoading).toBe(true)
    );
  });

  it("should return an error message if api response is not working", async () => {
    (fetchResearchedCharacters as jest.Mock).mockRejectedValue(
      new Error("api is not working...")
    );
    const { result } = renderHook(() => useResearchedCharacter("Sakura"), {
      wrapper,
    });
    expect(result.current.researchedCharacterIsLoading).toBe(true);
    await waitFor(() => {
      expect(result.current.researchedCharacterIsLoading).toBe(false);
      expect(result.current.researchedCharacter).toBeUndefined();
      expect(result.current.researchedCharacterIsError).toBe(true);
    });
  });
});
