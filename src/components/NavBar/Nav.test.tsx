import { render, screen } from "@testing-library/react";
import NavBar from "./NavBar";

jest.mock("./nav", () => ({
  Menu: [
    { id: 1, label: "Home", href: "/" },
    { id: 2, label: "Animes", href: "/search/animes" },
    { id: 3, label: "Mangas", href: "/search/mangas" },
    { id: 4, label: "Characters", href: "/search/characters" },
  ],
}));

describe("NavBar component", () => {
  it("should render the logo", () => {
    render(<NavBar />);
    const logoImage = screen.getByRole("img");
    expect(logoImage).toBeInTheDocument();
    expect(logoImage).toHaveAttribute(
      "src",
      expect.stringMatching(/\/_next\/image\?url=%2Fimg.jpg&w=128&q=75/i)
    );
  });

  it("should render menu items", () => {
    render(<NavBar />);

    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Animes")).toBeInTheDocument();
    expect(screen.getByText("Mangas")).toBeInTheDocument();
    expect(screen.getByText("Characters")).toBeInTheDocument();
  });

  it("should render links", () => {
    render(<NavBar />);
    expect(screen.getByText("Home")).toHaveAttribute("href", "/");
    expect(screen.getByText("Animes")).toHaveAttribute(
      "href",
      "/search/animes"
    );
    expect(screen.getByText("Mangas")).toHaveAttribute(
      "href",
      "/search/mangas"
    );
    expect(screen.getByText("Characters")).toHaveAttribute(
      "href",
      "/search/characters"
    );
  });

  it("should render NavMoblie", () => {
    render(<NavBar />);
    expect(screen.getByTestId("moblie-nav")).toBeInTheDocument();
  });

  it("should match a snapshot", () => {
    const { container } = render(<NavBar />);
    expect(container).toMatchSnapshot();
  });
});
