import * as React from "react";
import { render } from "@testing-library/react";
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

describe("button is clicked", () => {});
