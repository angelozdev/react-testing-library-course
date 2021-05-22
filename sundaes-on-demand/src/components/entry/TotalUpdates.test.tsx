import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Options from "./Options";

describe("change quantity", () => {
  beforeEach(() => {
    render(<Options type="scoops" />);
  });

  test("update input value", async () => {
    const inputsElement = await screen.findAllByRole("spinbutton");

    const chocolateInput = inputsElement[0];
    const vanillaInput = inputsElement[1];

    userEvent.clear(chocolateInput);
    userEvent.type(chocolateInput, "1");

    expect(chocolateInput).toHaveValue(1);

    userEvent.clear(vanillaInput);
    userEvent.type(vanillaInput, "5");

    expect(vanillaInput).toHaveValue(5);
  });

  test("change total price display", async () => {
    const inputsElement = await screen.findAllByRole("spinbutton");
    const priceElement = screen.getByText(/scoops total/i);

    const firstInput = inputsElement[0];

    userEvent.type(firstInput, "4");

    expect(priceElement).toHaveTextContent((4 * 3000).toString());
  });
});
