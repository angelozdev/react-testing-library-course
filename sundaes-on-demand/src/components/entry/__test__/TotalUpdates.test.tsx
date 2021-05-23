import * as React from "react";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Options } from "../";
import { Order } from "../../../contexts";

describe("change quantity", () => {
  beforeEach(() => {
    const wrapper: React.ComponentType = ({ children }) => {
      return <Order.Provider>{children}</Order.Provider>;
    };

    render(<Options type="scoops" />, { wrapper });
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
    const secondInput = inputsElement[1];

    userEvent.clear(firstInput);
    userEvent.type(firstInput, "5");
    expect(priceElement).toHaveTextContent("$ 17.500");

    userEvent.clear(secondInput);
    userEvent.type(secondInput, "2");

    expect(priceElement).toHaveTextContent("$ 24.500");
  });
});
