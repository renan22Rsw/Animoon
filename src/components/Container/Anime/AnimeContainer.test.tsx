import { render, screen } from "@testing-library/react";
import AnimeContainer from "./AnimeContainer";

describe("AnimeContainer component", () => {
  it("should render AnimeContainer children", () => {
    render(
      <AnimeContainer>
        <h2>Testing...</h2>
      </AnimeContainer>
    );
    expect(screen.getByText("Testing...")).toBeInTheDocument();
  });
});
