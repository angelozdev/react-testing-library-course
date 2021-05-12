import * as React from "react";
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

test("click on button", () => {
  const { getByRole } = render(<App />);
  const buttonElement = getByRole("button", {
    name: /change to/i,
  });

  fireEvent.click(buttonElement);
  expect(buttonElement).toHaveClass("bg-red-500");
  expect(buttonElement).toHaveTextContent(/blue/i);

  fireEvent.click(buttonElement);
  expect(buttonElement).toHaveClass("bg-blue-500");
  expect(buttonElement).toHaveTextContent(/red/i);
});
