import { render, screen } from "@testing-library/react";
import MangaSideBarInfo from "./MangaSideBarInfo";
import { mock } from "../MangaInfo/mock";

describe("MangaSideBarInfo component", () => {
  it("should render MangaSideBarInfo with props", () => {
    render(<MangaSideBarInfo {...mock} />);

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
    render(<MangaSideBarInfo {...mock} />);
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
