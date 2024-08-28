import { render, screen } from "@testing-library/react";
import MangaSideBarInfo from "./MangaSideBarInfo";

describe("MangaSideBarInfo component", () => {
  it("should render MangaSideBarInfo with props", () => {
    render(
      <MangaSideBarInfo
        averageScore={80}
        meanScore={85}
        favourites={1200}
        format="Manga"
        genres={["action, adventure"]}
        popularity={1000}
        source="Original"
        status="Releasing"
      />
    );

    expect(screen.getByText("Manga")).toBeInTheDocument();
    expect(screen.getByText("Releasing")).toBeInTheDocument();
    expect(screen.getByText("80%")).toBeInTheDocument();
    expect(screen.getByText("85%")).toBeInTheDocument();
    expect(screen.getByText("1200")).toBeInTheDocument();
    expect(screen.getByText("1000")).toBeInTheDocument();
    expect(screen.getByText("action, adventure")).toBeInTheDocument();
    expect(screen.getByText("Original")).toBeInTheDocument();
  });

  it("should render titles from MangaSideBarInfo", () => {
    render(
      <MangaSideBarInfo
        averageScore={0}
        meanScore={0}
        favourites={0}
        format="N/A"
        genres={["N/A"]}
        popularity={0}
        source="N/A"
        status="N/A"
      />
    );
    expect(screen.getByText("Format")).toBeInTheDocument();
    expect(screen.getByText("Status")).toBeInTheDocument();
    expect(screen.getByText("Average Score")).toBeInTheDocument();
    expect(screen.getByText("Mean Score")).toBeInTheDocument();
    expect(screen.getByText("Popularity")).toBeInTheDocument();
    expect(screen.getByText("Favorites")).toBeInTheDocument();
    expect(screen.getByText("Genres")).toBeInTheDocument();
    expect(screen.getByText("Source")).toBeInTheDocument();
  });
});
