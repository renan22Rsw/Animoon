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

  it("should updatae selectValue on input change", async () => {
    (usePathname as jest.Mock).mockImplementation(() => `/search/abc`);
    render(<InputSearch />);
    const select = screen.getByTestId("select-input");
    await userEvent.selectOptions(select, "Romance");
    expect(select).toHaveValue("Romance");
  });

  it("should render the correct options", () => {
    (usePathname as jest.Mock).mockImplementation(() => `/search/abc`);
    render(<InputSearch />);
    const options = screen.getAllByRole("option");
    expect(options[0]).toHaveValue("");
    expect(options[1]).toHaveValue("Action");
    expect(options[2]).toHaveValue("Adventure");
    expect(options[3]).toHaveValue("Comedy");
    expect(options[4]).toHaveValue("Drama");
    expect(options[5]).toHaveValue("Ecchi");
    expect(options[6]).toHaveValue("Fantasy");
    expect(options[7]).toHaveValue("Horror");
    expect(options[8]).toHaveValue("Mahou Shoujo");
    expect(options[9]).toHaveValue("Mecha");
    expect(options[10]).toHaveValue("Music");
    expect(options[11]).toHaveValue("Mystery");
    expect(options[12]).toHaveValue("Psychological");
    expect(options[13]).toHaveValue("Romance");
    expect(options[14]).toHaveValue("Sci Fi");
    expect(options[15]).toHaveValue("Slice of Life");
    expect(options[16]).toHaveValue("Sports");
    expect(options[17]).toHaveValue("Supernatural");
    expect(options[18]).toHaveValue("Thriller");
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
    const select = screen.getByTestId("select-input");
    await userEvent.selectOptions(select, "Romance");

    await waitFor(
      () => {
        expect(pushMock).toHaveBeenCalledWith("?genres=Romance");
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

    const select = screen.getByTestId("select-input");
    await userEvent.selectOptions(select, "Romance");

    await waitFor(
      () => {
        expect(pushMock).toHaveBeenCalledWith(
          "abc/?search=Naruto&genres=Romance"
        );
      },
      { timeout: 3000 }
    );
  });
});
