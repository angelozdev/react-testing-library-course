import { render, screen } from "../../../utils/test-utils";
import { ScoopOtion } from "..";
import { Item } from "../../../types";
import userEvent from "@testing-library/user-event";

const TestComponent = (props: Partial<Item>) => {
  const { imagePath = "image.png", name = "Chocolate", price = 4000 } = props;

  return <ScoopOtion imagePath={imagePath} name={name} price={price} />;
};

test("initial value input should start out 0", () => {
  render(<TestComponent />);

  const inputElement = screen.getByRole("spinbutton");

  expect(inputElement).toHaveValue(0);
});

test("display an image", () => {
  render(<TestComponent />);

  const imageElement = screen.getByRole("img");

  expect(imageElement).toBeInTheDocument();
});

test("change quantity on type number", () => {
  render(<TestComponent />);

  const inputElement = screen.getByRole("spinbutton");

  userEvent.clear(inputElement);
  userEvent.type(inputElement, "4");
  expect(inputElement).toHaveValue(4);

  userEvent.clear(inputElement);
  userEvent.type(inputElement, "7");
  expect(inputElement).toHaveValue(7);

  userEvent.clear(inputElement);
  userEvent.type(inputElement, "asdfasf");
  expect(inputElement).toHaveValue(0);
});
