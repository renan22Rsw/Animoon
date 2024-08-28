import { render, screen } from "@testing-library/react";
import Column from "./Column";

describe("Column component", () => {
  it("should render correcly", () => {
    render(
      <Column>
        <p>Testando</p>
      </Column>
    );

    const childrenElement = screen.getByText(/testando/i);
    expect(childrenElement).toBeInTheDocument();
  });
});
