import { render, screen } from "@testing-library/react";
import NavBar from "./NavBar";
import MoblieNav from "../SpeedDial/SpeedDial";

jest.mock("./nav", () => ({
  Menu: [
    { id: 1, label: "Home", href: "/" },
    { id: 2, label: "Animes", href: "/search/animes" },
    { id: 3, label: "Mangas", href: "/search/mangas" },
    { id: 4, label: "Characters", href: "/search/characters" },
  ],
}));

describe("NavBar component", () => {
  it("should have a logo", () => {
    render(<NavBar />);
    const logoImage = screen.getByRole("img");
    expect(logoImage).toBeInTheDocument();
    expect(logoImage).toHaveAttribute("src");
  });

  it("should render menu items", () => {
    render(<NavBar />);

    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Animes")).toBeInTheDocument();
    expect(screen.getByText("Mangas")).toBeInTheDocument();
    expect(screen.getByText("Characters")).toBeInTheDocument();
  });

  it("should render NavMoblie", () => {
    render(<NavBar />);
    expect(screen.getByTestId("moblie-nav")).toBeInTheDocument();
  });
});
