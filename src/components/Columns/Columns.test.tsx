import { render, screen } from "@testing-library/react";
import Column from "./Column";

describe("Column component", () => {
  it("should render column content", () => {
    render(
      <Column>
        <p>Testando</p>
      </Column>
    );

    const childrenElement = screen.getByText(/testando/i);
    expect(childrenElement).toBeInTheDocument();
  });

  it("should match an inline snapshot", () => {
    const { container } = render(
      <Column>
        <p>cheking...</p>
      </Column>
    );
    expect(container).toMatchInlineSnapshot(`
<div>
  <div
    class="hidden lg:block"
  >
    <h2
      class="m-4 uppercase text-[#EDEDED] font-bold cursor-pointer"
    />
    <div
      class="flex-col justify-center"
    >
      <p>
        cheking...
      </p>
    </div>
  </div>
</div>
`);
  });
});
