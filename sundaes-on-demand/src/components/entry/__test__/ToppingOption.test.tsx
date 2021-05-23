import { render, screen } from "../../../utils/test-utils";

/* Components */
import { ToppingOption } from "../";
import { Item } from "../../../types";

const fakeTopping: Item = {
  imagePath: "image.png",
  name: "Candies",
  price: 1000,
};

test("should start unchecked", () => {
  render(<ToppingOption {...fakeTopping} />);

  const checkboxElemenet = screen.getByRole("checkbox");
  expect(checkboxElemenet).not.toBeChecked();
});

test("should display its price", () => {
  render(<ToppingOption {...fakeTopping} />);

  const displayPrice = screen.getByText(/price:/i).querySelector("strong");

  expect(displayPrice).toHaveTextContent("1.000");
});
