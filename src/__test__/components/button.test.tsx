import { render, fireEvent } from "@testing-library/react";
import App from "../../App";

describe("initial button properties", () => {
  let buttonElement: HTMLElement;

  beforeEach(() => {
    const { getByRole } = render(<App />);

    buttonElement = getByRole("button", {
      name: /change to/i,
    });
  });

  test("button has correct color", () => {
    expect(buttonElement).toHaveClass("bg-blue-500");
  });

  test("button has correct text", () => {
    expect(buttonElement).toHaveTextContent(/red/i);
  });
});

describe("initial conditions", () => {
  let buttonElement: HTMLElement;
  let checkboxElement: HTMLElement;

  beforeEach(() => {
    const { getByRole } = render(<App />);

    buttonElement = getByRole("button", {
      name: /change to/i,
    });
    checkboxElement = getByRole("checkbox");
  });

  test("button starts enabled", () => {
    expect(buttonElement).toBeEnabled();
  });

  test("checkbox starts unchecked", () => {
    expect(checkboxElement).not.toBeChecked();
  });
});

describe("click on button", () => {
  let buttonElement: HTMLElement;
  beforeEach(() => {
    const { getByRole } = render(<App />);

    buttonElement = getByRole("button", {
      name: /change to/i,
    });

    fireEvent.click(buttonElement);
  });

  describe("when background is blue", () => {
    test("background should change to red", () => {
      expect(buttonElement).toHaveClass("bg-red-500");
    });

    test("text content should contains 'blue'", () => {
      expect(buttonElement).toHaveTextContent(/blue/i);
    });
  });

  describe("when background is red", () => {
    beforeEach(() => {
      fireEvent.click(buttonElement);
    });

    test("background should change to blue", () => {
      expect(buttonElement).toHaveClass("bg-blue-500");
    });

    test("text content should contains 'red'", () => {
      expect(buttonElement).toHaveTextContent(/red/i);
    });
  });
});
