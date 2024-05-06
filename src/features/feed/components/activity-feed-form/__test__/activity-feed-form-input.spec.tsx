import { render } from "@testing-library/react";
import { ActivityFeedFormInput } from "../components/activity-feed-form-input";

describe('ActivityFeedFormInput', () => {
  it('should render', () => {
    render(<ActivityFeedFormInput handleFocus={jest.fn()} />);
    const textarea = document.querySelector('textarea');
    expect(textarea).toBeInTheDocument();
    expect(textarea).toHaveAttribute('placeholder', 'Add a note about Milton Romaguera...');
    expect(textarea).not.toHaveAttribute('placeholder', 'What\'s on your mind?');
    expect(textarea).toHaveAttribute('name', 'message');
  });
});
