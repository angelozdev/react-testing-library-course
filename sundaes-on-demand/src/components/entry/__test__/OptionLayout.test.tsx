import { render, screen } from "../../../utils/test-utils";
import userEvent from "@testing-library/user-event";
import { OptionLayout, ScoopList, ToppingList } from "../";

test("when scoops quantities changes then change the display of price", async () => {
  render(
    <OptionLayout title="Test title" type="scoops">
      <ScoopList />
    </OptionLayout>
  );

  const inputsElement = await screen.findAllByRole("spinbutton");
  const priceDisplayElement = screen.getByTestId("price-display");

  const firstInput = inputsElement[0];
  const secondInput = inputsElement[1];

  userEvent.type(firstInput, "1");
  expect(priceDisplayElement).toHaveTextContent("$ 3.500");

  userEvent.type(secondInput, "2");
  expect(priceDisplayElement).toHaveTextContent("$ 10.500");

  userEvent.clear(secondInput);
  expect(priceDisplayElement).toHaveTextContent("$ 3.500");

  userEvent.clear(firstInput);
  expect(priceDisplayElement).toHaveTextContent("$ 0");
});

test("when topping checked then change the display of price", async () => {
  render(
    <OptionLayout title="Test title" type="toppings">
      <ToppingList />
    </OptionLayout>
  );

  const checkboxElement = await screen.findAllByRole("checkbox");
  const priceDisplayElement = screen.getByTestId("price-display");

  const firstCheckbox = checkboxElement[0];
  const secondCheckbox = checkboxElement[1];

  userEvent.click(firstCheckbox);
  expect(priceDisplayElement).toHaveTextContent("$ 4.000");

  userEvent.click(secondCheckbox);
  expect(priceDisplayElement).toHaveTextContent("$ 7.500");

  userEvent.click(secondCheckbox);
  expect(priceDisplayElement).toHaveTextContent("$ 4.000");

  userEvent.click(firstCheckbox);
  expect(priceDisplayElement).toHaveTextContent("$ 0");
});
