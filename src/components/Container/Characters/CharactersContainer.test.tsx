import { render, screen } from "@testing-library/react";
import CharactersContainer from "./CharactersContainer";
import { usePathname } from "next/navigation";

jest.mock("next/navigation", () => ({
  usePathname: jest.fn(),
}));

describe("CharactersContainer component", () => {
  it("should render CharactersContainer children", () => {
    render(
      <CharactersContainer id={1}>
        <div>Characters</div>
      </CharactersContainer>
    );
    expect(screen.getByText("Characters")).toBeInTheDocument();
  });

  it("should render link if url is equal id/path", () => {
    (usePathname as jest.Mock).mockImplementation(() => "/path/1");
    render(
      <CharactersContainer id={1}>
        <div>Characters</div>
      </CharactersContainer>
    );

    const link = screen.getByRole("link");
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "1/characters");
  });
});
