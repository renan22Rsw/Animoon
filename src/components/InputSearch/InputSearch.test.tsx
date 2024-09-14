import { render, screen, waitFor } from "@testing-library/react";
import InputSearch from "./InputSearch";
import { userEvent } from "@testing-library/user-event";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
  usePathname: jest.fn(),
}));

describe("InputSearch component", () => {
  it("should render searchInput ", () => {
    render(<InputSearch />);
    expect(screen.getByRole("searchbox")).toBeInTheDocument();
  });

  it("should render select if pathname is less or equal than 6", () => {
    (usePathname as jest.Mock).mockImplementation(() => `/search/abc`);
    render(<InputSearch />);
    const select = screen.getByTestId("select-input");
    expect(select).toBeInTheDocument();
  });

  it("should update inputValue on input change", async () => {
    render(<InputSearch />);
    const input = screen.getByRole("searchbox");
    await userEvent.type(input, "Naruto");
    expect(input).toHaveValue("Naruto");
  });

  it("should updatae selectValue on div click", async () => {
    (usePathname as jest.Mock).mockImplementation(() => `/search/abc`);
    render(<InputSearch />);
    const options = screen.getAllByTestId("options");
    const genre = options[1];
    await userEvent.click(genre);
    expect(genre).toHaveTextContent("Action");
  });

  it("should render the correct options", () => {
    (usePathname as jest.Mock).mockImplementation(() => `/search/abc`);
    render(<InputSearch />);

    const options = screen.getAllByTestId("options");

    expect(options[0]).toContainHTML("");
    expect(options[1]).toContainHTML("Action");
    expect(options[2]).toContainHTML("Adventure");
    expect(options[3]).toContainHTML("Comedy");
    expect(options[4]).toContainHTML("Drama");
    expect(options[5]).toContainHTML("Ecchi");
    expect(options[6]).toContainHTML("Fantasy");
    expect(options[7]).toContainHTML("Horror");
    expect(options[8]).toContainHTML("Mahou Shoujo");
    expect(options[9]).toContainHTML("Mecha");
    expect(options[10]).toContainHTML("Music");
    expect(options[11]).toContainHTML("Mystery");
    expect(options[12]).toContainHTML("Psychological");
    expect(options[13]).toContainHTML("Romance");
    expect(options[14]).toContainHTML("Sci Fi");
    expect(options[15]).toContainHTML("Slice of Life");
    expect(options[16]).toContainHTML("Sports");
    expect(options[17]).toContainHTML("Supernatural");
    expect(options[18]).toContainHTML("Thriller");
  });

  it("should navigate to correct url when inputSearch is filled", async () => {
    const pushMock = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({ push: pushMock });
    render(<InputSearch />);
    const input = screen.getByRole("searchbox");
    await userEvent.type(input, "Naruto");

    await waitFor(
      () => {
        expect(pushMock).toHaveBeenCalledWith("?search=Naruto");
      },
      { timeout: 3000 }
    );
  });

  it("should navigate to correct url when Select is filled", async () => {
    const pushMock = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({ push: pushMock });
    render(<InputSearch />);
    const options = screen.getAllByTestId("options");
    const genre = options[1];
    await userEvent.click(genre);

    await waitFor(
      () => {
        expect(pushMock).toHaveBeenCalledWith("?genres=Action");
      },
      { timeout: 3000 }
    );
  });

  it("should navigate to correct url when inputSearch and select are filled", async () => {
    const pushMock = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({ push: pushMock });
    render(<InputSearch />);

    const input = screen.getByRole("searchbox");
    await userEvent.type(input, "Naruto");

    const options = screen.getAllByTestId("options");
    const genre = options[1];
    await userEvent.click(genre);

    await waitFor(
      () => {
        expect(pushMock).toHaveBeenCalledWith(
          "abc/?search=Naruto&genres=Action"
        );
      },
      { timeout: 3000 }
    );
  });
});
