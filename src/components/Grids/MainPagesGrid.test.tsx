import { render, screen } from "@testing-library/react";
import MainPagesGrid from "./MainPagesGrid";
import { mockAnimesAndMangasMainPage, mockCharacterMainPage } from "./mock";

const datas = [mockAnimesAndMangasMainPage, mockCharacterMainPage];

describe("MainPagesGrid component", () => {
  it("should render anime/mangas titles and character names", () => {
    render(<MainPagesGrid datas={datas} />);
    expect(screen.getByText("Akame ga kill")).toBeInTheDocument();
    expect(screen.getByText("Akame")).toBeInTheDocument();
  });

  it("should render animes/mangas/characters images", () => {
    render(<MainPagesGrid datas={datas} />);

    const images = screen.getAllByRole("img");
    expect(images[0]).toBeInTheDocument();
    expect(images[1]).toBeInTheDocument();
  });

  it("should render animes/mangas/characters links", () => {
    render(<MainPagesGrid datas={datas} />);
    const links = screen.getAllByRole("link");
    expect(links[0]).toBeInTheDocument();
    expect(links[1]).toBeInTheDocument();
  });

  it("should match a snapshot", () => {
    const { container } = render(<MainPagesGrid datas={datas} />);
    expect(container).toMatchSnapshot();
  });
});
