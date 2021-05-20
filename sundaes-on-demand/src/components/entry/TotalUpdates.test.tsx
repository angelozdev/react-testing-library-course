import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

/* Components */
import { Options } from "./";

describe("initial states", () => {
  test("scoop subtotal price starts out $0", async () => {
    render(<Options type="scoops" />);

    const priceElement = await screen.findByText(/scoops total/i);

    expect(priceElement).toHaveTextContent("$0");
  });
});

test("update total scoops when changes its quantity", async () => {
  render(<Options type="scoops" />);

  const inputElement = await screen.findByRole("spinbutton");
  const priceElement = screen.getByText(/scoops total/i);

  userEvent.clear(inputElement);
  userEvent.type(inputElement, "1");

  expect(priceElement).toHaveTextContent("$3500");

  userEvent.clear(inputElement);
  userEvent.type(inputElement, "2");

  expect(priceElement).toHaveTextContent("$7000");
});
