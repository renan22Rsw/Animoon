import { render, screen } from "@testing-library/react";
import SubPageHeader from "./SubPageHeader";
import { mock } from "./mock";

describe("SubPageHeader component", () => {
  it("should render SubPageHeader images", () => {
    render(<SubPageHeader {...mock} />);
    const desktopImage = screen.getByTestId("desktop-version");
    const mobileImage = screen.getByTestId("mobile-version");
    expect(desktopImage).toBeInTheDocument();
    expect(mobileImage).toBeInTheDocument();
    expect(desktopImage).toHaveAttribute("width", "130");
    expect(mobileImage).toHaveAttribute("width", "130");
    expect(desktopImage).toHaveAttribute("height", "130");
    expect(mobileImage).toHaveAttribute("height", "130");
    expect(desktopImage).toHaveStyle({
      height: "345px",
      width: "230px",
    });
    expect(mobileImage).toHaveStyle({
      height: "345px",
      width: "230px",
    });
    expect(desktopImage).toHaveAttribute("fetchpriority", "high");
    expect(mobileImage).toHaveAttribute("fetchpriority", "high");
  });

  it("should render SubPageHeader - Desktop Version", () => {
    render(<SubPageHeader {...mock} />);
    const titles = screen.getAllByText(mock.name);
    expect(titles[0]).toBeInTheDocument();
    expect(titles[1]).toBeInTheDocument();

    const nativeNameDesktop = screen.getByTestId("nativeName-desktop");
    expect(nativeNameDesktop).toBeInTheDocument();
    expect(nativeNameDesktop).toHaveTextContent(mock.nativeName);

    const ageDesktop = screen.getByTestId("desktop-age");
    expect(ageDesktop).toBeInTheDocument();
    expect(ageDesktop).toHaveTextContent(mock.age);

    const genderDesktop = screen.getByTestId("desktop-gender");
    expect(genderDesktop).toBeInTheDocument();
    expect(genderDesktop).toHaveTextContent(mock.gender);

    const birthdayDesktop = screen.getByTestId("desktop-birthday");
    expect(birthdayDesktop).toBeInTheDocument();
    expect(birthdayDesktop).toHaveTextContent(`${mock.month}/${mock.day}`);

    const hometownDesktop = screen.getByTestId("desktop-hometown");
    expect(hometownDesktop).toBeInTheDocument();
    expect(hometownDesktop).toHaveTextContent(mock.hometown);

    const bloodTypeDesktop = screen.getByTestId("desktop-bloodType");
    expect(bloodTypeDesktop).toBeInTheDocument();
    expect(bloodTypeDesktop).toHaveTextContent(mock.bloodType);
  });

  it("should render SubPages - Mobile Version", () => {
    render(<SubPageHeader {...mock} />);
    const titles = screen.getAllByText(mock.name);
    expect(titles[0]).toBeInTheDocument();
    expect(titles[1]).toBeInTheDocument();

    const nativeNameMobile = screen.getByTestId("nativeName-mobile");
    expect(nativeNameMobile).toBeInTheDocument();
    expect(nativeNameMobile).toHaveTextContent(mock.nativeName);

    const ageMobilie = screen.getByTestId("mobile-age");
    expect(ageMobilie).toBeInTheDocument();
    expect(ageMobilie).toHaveTextContent(mock.age);

    const genderMobile = screen.getByTestId("mobile-gender");
    expect(genderMobile).toBeInTheDocument();
    expect(genderMobile).toHaveTextContent(mock.gender);

    const birthdayMobile = screen.getByTestId("mobile-birthday");
    expect(birthdayMobile).toBeInTheDocument();
    expect(birthdayMobile).toHaveTextContent(`${mock.month}/${mock.day}`);

    const hometownMobile = screen.getByTestId("mobile-hometown");
    expect(hometownMobile).toBeInTheDocument();
    expect(hometownMobile).toHaveTextContent(mock.hometown);

    const bloodTypeMobile = screen.getByTestId("mobile-bloodType");
    expect(bloodTypeMobile).toBeInTheDocument();
    expect(bloodTypeMobile).toHaveTextContent(mock.bloodType);
  });

  it("should handle missing optional props gracefully", () => {
    const incompleteMock = {
      ...mock,
      hometown: undefined,
      yearsActive: undefined,
    };
    render(<SubPageHeader {...incompleteMock} />);
    expect(screen.queryByTestId("desktop-hometown")).toBeNull();
    expect(screen.queryByText("Years active")).toBeNull();
  });

  it("should render the TextArea with the description prop", () => {
    render(<SubPageHeader {...mock} />);
    const textAreaDesktop = screen.getAllByTestId("text-area");
    expect(textAreaDesktop[0]).toBeInTheDocument();
    expect(textAreaDesktop[0]).toHaveTextContent(mock.description);

    expect(textAreaDesktop[1]).toBeInTheDocument();
    expect(textAreaDesktop[1]).toHaveTextContent(mock.description);
  });

  it("should match a snapshot", () => {
    const { container } = render(<SubPageHeader {...mock} />);
    expect(container).toMatchSnapshot();
  });
});
