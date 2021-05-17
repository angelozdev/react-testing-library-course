import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

/* Components */
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

  test("doesn't show popover", () => {
    const popoverElement = screen.queryByRole("tooltip");

    expect(popoverElement).not.toBeInTheDocument();
  });
});

describe("click on checkbox input", () => {
  beforeEach(() => {
    render(<SummaryForm />);
    const checkboxElement = screen.getByRole("checkbox", {
      name: /i agree to/i,
    });

    userEvent.click(checkboxElement);
  });

  test("checkbox is checked", () => {
    const checkboxElement = screen.getByRole("checkbox", {
      name: /i agree to/i,
    });

    expect(checkboxElement).toBeChecked();
  });

  test("enables button", () => {
    const buttonElement = screen.getByRole("button", {
      name: /confirm order/i,
    });

    expect(buttonElement).toBeEnabled();
  });
});

describe("hover on terms and conditions", () => {
  beforeEach(() => {
    render(<SummaryForm />);
    const termsAndConditionsElement = screen.getByText(/terms and conditions/i);
    userEvent.hover(termsAndConditionsElement);
  });

  test("show popover", () => {
    const popoverElement = screen.getByRole("tooltip");

    expect(popoverElement).toBeInTheDocument();
  });

  test("unhover hidden popover", async () => {
    const termsAndConditionsElement = screen.getByText(/terms and conditions/i);
    userEvent.unhover(termsAndConditionsElement);

    const popoverElement = screen.queryByRole("tooltip");

    expect(popoverElement).not.toBeInTheDocument();
  });
});
