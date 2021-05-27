import { render, screen } from "../utils/test-utils";
import App from "../App";
import userEvent from "@testing-library/user-event";

test("order phases", async () => {
  render(<App />);

  const { 0: chocolateInput } = await screen.findAllByRole("spinbutton");
  const button = screen.getByRole("button", { name: /continue/i });

  expect(screen.getByTestId("entry-page")).toBeInTheDocument();
  userEvent.type(chocolateInput, "1");
  userEvent.click(button);

  expect(screen.getByTestId("summary-page")).toBeInTheDocument();

  const checkboxTerms = screen.getByRole("checkbox", { name: /i agree/i });
  const buttonSummary = screen.getByRole("button", { name: /confirm/i });

  userEvent.click(checkboxTerms);
  userEvent.click(buttonSummary);

  expect(screen.getByTestId("thanks-page")).toBeInTheDocument();
});
