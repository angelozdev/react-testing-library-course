import { render, fireEvent } from "@testing-library/react";

/* Components */
import App from "../App";

const setup = () => {
  return render(<App />);
};

describe("initial button properties", () => {
  let buttonElement: HTMLElement;

  beforeEach(() => {
    const { getByRole } = setup();

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
    const { getByRole } = setup();

    buttonElement = getByRole("button", {
      name: /change to/i,
    });
    checkboxElement = getByRole("checkbox", { name: /disable button/i });
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
    const { getByRole } = setup();

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

describe("checkbox is checked", () => {
  let buttonElement: HTMLElement;
  let checkboxElement: HTMLElement;

  beforeEach(() => {
    const { getByRole } = setup();
    buttonElement = getByRole("button", { name: /change to/i });
    checkboxElement = getByRole("checkbox", { name: /disable button/i });

    fireEvent.click(checkboxElement);
  });

  test("button should be disabled", () => {
    expect(buttonElement).toBeDisabled();
  });

  test("background button should be 'gray'", () => {
    expect(buttonElement).toHaveClass("bg-gray-500");
  });

  test("button shouldn't call onClick function", () => {});
});

describe("checkbox isn't checked", () => {
  let buttonElement: HTMLElement;
  /* let checkboxElement: HTMLElement; */

  beforeEach(() => {
    const { getByRole } = setup();
    buttonElement = getByRole("button", { name: /change to/i });
    /* checkboxElement = getByRole("checkbox"); */
  });

  test("button should be enable", () => {
    expect(buttonElement).toBeEnabled();
  });
});
