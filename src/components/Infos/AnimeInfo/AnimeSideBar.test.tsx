import { render, screen } from "@testing-library/react";
import AnimeSideBarInfo from "./AnimeSideBarInfo";

describe("AnimeSideBarInfo component", () => {
  it("should render AnimeSideBarInfo with props", () => {
    render(
      <AnimeSideBarInfo
        duration={24}
        averageScore={85}
        meanScore={88}
        favourites={500}
        format="TV"
        genres={["comedy", "horror"]}
        popularity={1000}
        season="winter"
        seasonYear={2024}
        source="Light Novel"
        status="Airing"
      />
    );

    expect(screen.getByText("TV")).toBeInTheDocument();
    expect(screen.getByText("24min")).toBeInTheDocument();
    expect(screen.getByText("Airing")).toBeInTheDocument();
    expect(screen.getByText("winter")).toBeInTheDocument();
    expect(screen.getByText("2024")).toBeInTheDocument();
    expect(screen.getByText("85%")).toBeInTheDocument();
    expect(screen.getByText("88%")).toBeInTheDocument();
    expect(screen.getByText("1000")).toBeInTheDocument();
    expect(screen.getByText("500")).toBeInTheDocument();
    expect(screen.getByText("comedy, horror")).toBeInTheDocument();
    expect(screen.getByText("Light Novel")).toBeInTheDocument();
  });

  it("should render titles from AnimeSideBarInfo component", () => {
    render(
      <AnimeSideBarInfo
        format="TV"
        duration={0}
        status="Unknown"
        season=""
        seasonYear={0}
        averageScore={0}
        meanScore={0}
        popularity={0}
        favourites={0}
        genres={[]}
        source="Unknown"
      />
    );
    expect(screen.getByText("Format")).toBeInTheDocument();
    expect(screen.getByText("Episode Duration")).toBeInTheDocument();
    expect(screen.getByText("Status")).toBeInTheDocument();
    expect(screen.getByText("Season")).toBeInTheDocument();
    expect(screen.getByText("Season Year")).toBeInTheDocument();
    expect(screen.getByText("Average Score")).toBeInTheDocument();
    expect(screen.getByText("Mean Score")).toBeInTheDocument();
    expect(screen.getByText("Popularity")).toBeInTheDocument();
    expect(screen.getByText("Favorites")).toBeInTheDocument();
    expect(screen.getByText("Genres")).toBeInTheDocument();
    expect(screen.getByText("Source")).toBeInTheDocument();
  });
});
