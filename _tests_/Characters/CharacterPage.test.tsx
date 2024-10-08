import {
  fetchCharactersBirthdays,
  fetchMostFavoritedCharacters,
  fetchResearchedCharacters,
} from "@/api/CharacterMainPage";
import CharactersPage from "@/components/Contents/Characters/CharactersPageContent";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen, waitFor } from "@testing-library/react";
import { mockCharacter } from "./mock";

jest.mock("../../src/api/CharacterMainPage", () => ({
  fetchCharactersBirthdays: jest.fn(),
  fetchMostFavoritedCharacters: jest.fn(),
  fetchResearchedCharacters: jest.fn(),
}));

const client = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

describe("CharactersPage", () => {
  beforeEach(() => {
    (fetchCharactersBirthdays as jest.Mock).mockResolvedValue(mockCharacter);
    (fetchMostFavoritedCharacters as jest.Mock).mockResolvedValue(
      mockCharacter
    );
    (fetchResearchedCharacters as jest.Mock).mockResolvedValue(mockCharacter);
  });

  afterEach(() => {
    client.clear();
    jest.clearAllMocks();
  });
  it("should render CharactersPage datas", async () => {
    render(
      <QueryClientProvider client={client}>
        <CharactersPage />
      </QueryClientProvider>
    );
    await waitFor(() => {
      //titles
      expect(screen.getByText("Birthdays")).toBeInTheDocument();
      expect(screen.getByText("Most Favorited Characters")).toBeInTheDocument();

      //characters-names

      const charactersNames = screen.getAllByText("Character Name 1");
      expect(charactersNames[0]).toBeInTheDocument();
      expect(charactersNames[1]).toBeInTheDocument();

      //images
      const images = screen.getAllByRole("img");
      expect(images[0]).toBeInTheDocument();
      expect(images[1]).toBeInTheDocument();
    });
  });

  it("should return loading component", async () => {
    render(
      <QueryClientProvider client={client}>
        <CharactersPage />
      </QueryClientProvider>
    );
    await waitFor(() => {
      expect(screen.getByTestId("loading-component")).toBeInTheDocument();
    });
  });

  it("should return api is not working component ", async () => {
    (fetchCharactersBirthdays as jest.Mock).mockRejectedValue(new Error());
    (fetchMostFavoritedCharacters as jest.Mock).mockRejectedValue(new Error());
    (fetchResearchedCharacters as jest.Mock).mockRejectedValue(new Error());

    render(
      <QueryClientProvider client={client}>
        <CharactersPage />
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
