import { render, screen } from "@testing-library/react";
import FeedsRadioButtons from "../components/feeds-radio-buttons";
import { Provider } from "react-redux";
import { store } from "@src/app/store";

jest.mock("@mui/material", () => ({
  RadioGroup: () => <div>Try this</div>,
}));

describe('FeedsRadioButtons', () => {
  it('should render', () => {
    render(
      <Provider store={store}>
        <FeedsRadioButtons />
      </Provider>
    );
    screen.debug();
  });
});