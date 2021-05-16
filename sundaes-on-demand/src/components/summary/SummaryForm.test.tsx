import { render, screen, fireEvent } from "@testing-library/react";
import { SummaryForm } from "./";

describe("initial states", () => {
  beforeEach(() => {
    render(<SummaryForm />);
  });

  test("checkbox is unchecked by default", () => {
    const checkboxElement = screen.getByRole("checkbox", {
      name: /i agree to/i,
    });

    expect(checkboxElement).not.toBeChecked();
  });

  test("button is disabled by default", () => {
    const buttonElement = screen.getByRole("button", {
      name: /confirm order/i,
    });

    expect(buttonElement).toBeDisabled();
  });
});

describe("click on checkbox input", () => {
  beforeEach(() => {
    render(<SummaryForm />);
    const checkboxElement = screen.getByRole("checkbox", {
      name: /i agree to/i,
    });

    fireEvent.click(checkboxElement);
  });

  test("enables button", () => {
    const buttonElement = screen.getByRole("button", {
      name: /confirm order/i,
    });

    expect(buttonElement).toBeEnabled();
  });

  test("checkbox is checked", () => {
    const checkboxElement = screen.getByRole("checkbox", {
      name: /i agree to/i,
    });

    expect(checkboxElement).toBeChecked();
  });
});
