import { render, screen } from "@testing-library/react";
import { ActivityFeedForm } from "../ui/activity-feed-form";

jest.mock("../components/activity-feed-form-footer.tsx", () => ({
  ActivityFeedFormFooter: () => <div data-testid="activity-footer">Activity Footer</div>,
}));

describe("ActivityFeedForm", () => {
  it("should render", () => {
    render(<ActivityFeedForm />);
    const icon = screen.getByTestId("FormatListBulletedIcon");
    const textarea = screen.getByPlaceholderText("Add a note about Milton Romaguera...");

    textarea.focus();

    const footer = screen.getByTestId("activity-footer");

    expect(icon).toBeInTheDocument();
    expect(footer).toBeInTheDocument();
    screen.debug();
  });
});