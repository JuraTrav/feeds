import { render, screen } from "@testing-library/react";
import { ActivityFeedFormFooter } from "../components/activity-feed-form-footer";

jest.mock("@mui/material", () => ({
  ...jest.requireActual("@mui/material"),
  FormControl: () => <div data-testid="form-control">Form Control</div>,
}));

describe("ActivityFeedFormFooter", () => {
  it("should render ActivityFeedFormFooter", () => {
    const component = render(<ActivityFeedFormFooter isActive={true} />);
    expect(component).toBeTruthy();
    expect(component).toMatchSnapshot();
  });

  it("should render submit button", () => {
    render(<ActivityFeedFormFooter isActive={true} />);
    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Submit');
    expect(button).toHaveAttribute('type', 'submit');
  });

  it("it shouldn't render submit button if isActive prop is false", () => {
    render(<ActivityFeedFormFooter isActive={false} />);

    const button = screen.queryByRole("button");
    expect(button).not.toBeInTheDocument();
  });

  it("should render radio buttons", () => {
    render(<ActivityFeedFormFooter isActive={true} />);
    const radioButtons = screen.getByTestId("form-control");

    expect(radioButtons).toBeInTheDocument();
    expect(radioButtons).toHaveTextContent('Form Control');
  });
});
