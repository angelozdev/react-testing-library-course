import { render, screen, fireEvent } from "@testing-library/react";
import { SummaryForm } from "./";

test("conditions checkbox is unchecked by default", () => {
  render(<SummaryForm />);
  const checkboxElement = screen.getByRole("checkbox", { name: /i agree to/i });

  expect(checkboxElement).not.toBeChecked();
});

test("conditions checkbox enables button", () => {
  render(<SummaryForm />);
  const checkboxElement = screen.getByRole("checkbox", { name: /i agree to/i });
  const buttonElement = screen.getByRole("button", { name: /confirm order/i });

  expect(buttonElement).toBeDisabled();

  fireEvent.click(checkboxElement);
  expect(buttonElement).toBeEnabled();
});
