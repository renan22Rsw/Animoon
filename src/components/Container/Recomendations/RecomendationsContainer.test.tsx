import { screen, render } from "@testing-library/react";
import RecommendationsContainer from "./RecommendationsContainer";

describe("RecomendationsContainer component", () => {
  it("should render RecomendationsContainer children", () => {
    render(
      <RecommendationsContainer>
        <h3>Testing...</h3>
      </RecommendationsContainer>
    );
    expect(screen.getByText("Testing...")).toBeInTheDocument();
  });
});
