import { render, screen } from "../../../utils/test-utils";

/* Components */
import { ToppingOption } from "../";
import { Item } from "../../../types";

const TestComponent = (props: Partial<Item>) => {
  const { imagePath = "candies.png", name = "Candies", price = 1000 } = props;

  return <ToppingOption imagePath={imagePath} name={name} price={price} />;
};

test("should start unchecked", () => {
  render(<TestComponent />);

  const checkboxElemenet = screen.getByRole("checkbox");
  expect(checkboxElemenet).not.toBeChecked();
});

test("should display its price", () => {
  render(<TestComponent />);

  const displayPrice = screen.getByText(/price:/i).querySelector("strong");

  expect(displayPrice).toHaveTextContent("1.000");
});
