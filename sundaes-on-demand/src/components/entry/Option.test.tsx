import { render, screen } from "@testing-library/react";

/* Components */
import { Option } from "./";

/* Fake data */
// eslint-disable-next-line jest/no-mocks-import
import { scoopsMock } from "../../__mocks__";

const fakeOption = scoopsMock[0];

describe("initial states", () => {
  test("scoop quantity start out 0", () => {
    render(<Option type="scoops" {...fakeOption} />);

    const inputPriceElement = screen.getByRole("spinbutton");

    expect(inputPriceElement).toHaveValue(0);
  });
});
