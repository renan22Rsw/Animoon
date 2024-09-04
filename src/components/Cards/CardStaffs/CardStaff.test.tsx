import { render, screen } from "@testing-library/react";
import CardStaff from "./CardStaff";
import { mock } from "./mock";

describe("CardStaff component", () => {
  it("should render CardStaff images", () => {
    render(<CardStaff {...mock} />);
    const staffImage = screen.getByRole("img");
    expect(staffImage).toBeInTheDocument();
    expect(staffImage).toHaveAttribute("width", "50");
    expect(staffImage).toHaveAttribute("height", "60");
    expect(staffImage).toHaveAttribute("fetchpriority", "high");
  });

  it("should render CardStaff links", () => {
    render(<CardStaff {...mock} />);
    const staffLink = screen.getByRole("link");
    expect(staffLink).toBeInTheDocument();
    expect(staffLink).toHaveAttribute("href", `/staffs/${mock.id}`);
  });

  it("should render titles of CardStaff", () => {
    render(<CardStaff {...mock} />);
    expect(screen.getByText(mock.name)).toBeInTheDocument();
    expect(screen.getByText(mock.occupation)).toBeInTheDocument();
  });

  it("should match a snapshot", () => {
    const { container } = render(<CardStaff {...mock} />);
    expect(container).toMatchSnapshot();
  });
});
