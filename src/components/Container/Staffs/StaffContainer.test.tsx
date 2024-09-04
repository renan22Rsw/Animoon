import { render, screen } from "@testing-library/react";
import StaffContainer from "./StaffContainer";
import { usePathname } from "next/navigation";

jest.mock("next/navigation", () => ({
  usePathname: jest.fn(),
}));

describe("StaffContainer component", () => {
  it("should render StaffContainer children", () => {
    render(
      <StaffContainer id={1}>
        <div>Staffs</div>
      </StaffContainer>
    );
    expect(screen.getByText("Staffs")).toBeInTheDocument();
  });

  it("should render link if url is equal id/path", () => {
    (usePathname as jest.Mock).mockImplementation(() => "/path/1");
    render(
      <StaffContainer id={1}>
        <div>Staffs</div>
      </StaffContainer>
    );

    const link = screen.getByRole("link");
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "1/staffs");
  });
});
