import { render, screen } from "@testing-library/react";
import PagesTitles from "./PagesTitles";
import SubTitles from "./SubTitles";

describe("PagesTitles component", () => {
  it("should render PagesTitles component", () => {
    render(
      <PagesTitles>
        <h2>Title</h2>
      </PagesTitles>
    );

    const childrenElement = screen.getByText(/title/i);
    expect(childrenElement).toBeInTheDocument();
  });
});

describe("SubTitles component", () => {
  it("should render PagesTitles component", () => {
    render(
      <SubTitles>
        <h3>Sub title</h3>
      </SubTitles>
    );

    const childrenElement = screen.getByText(/sub title/i);
    expect(childrenElement).toBeInTheDocument();
  });
});
