import { render, screen } from "../../../utils/test-utils";
import { GrandTotal, ScoopOtion, ToppingOption } from "../";
import userEvent from "@testing-library/user-event";

const TestComponent = () => {
  return (
    <div>
      <ul>
        <ScoopOtion imagePath="image.png" name="Vanilla" price={3000} />
        <ToppingOption imagePath="image.png" name="Candies" price={1000} />
      </ul>
      <GrandTotal />
    </div>
  );
};

test("should starts at $ 0", () => {
  render(<TestComponent />);
  const displayPrice = screen.getByRole("heading", { name: /grand total/i });

  expect(displayPrice).toHaveTextContent("$ 0");
});

describe("update grand total", () => {
  beforeEach(() => {
    render(<TestComponent />);
  });

  test("should update on add scoop", () => {
    const scoopInput = screen.getByRole("spinbutton");
    const displayPrice = screen.getByRole("heading", { name: /grand total/i });

    userEvent.type(scoopInput, "2");
    expect(displayPrice).toHaveTextContent("$ 6.000");

    userEvent.clear(scoopInput);
    userEvent.type(scoopInput, "100");
    expect(displayPrice).toHaveTextContent("$ 300.000");
  });

  test("should update on add topping", () => {
    const toppingCheckbox = screen.getByRole("checkbox");
    const displayPrice = screen.getByRole("heading", { name: /grand total/i });

    userEvent.click(toppingCheckbox);
    expect(displayPrice).toHaveTextContent("$ 1.000");
  });

  test("should update on remove scoop", () => {
    const scoopInput = screen.getByRole("spinbutton");
    const displayPrice = screen.getByRole("heading", { name: /grand total/i });

    userEvent.type(scoopInput, "2");
    expect(displayPrice).toHaveTextContent("$ 6.000");

    userEvent.clear(scoopInput);
    expect(displayPrice).toHaveTextContent("$ 0");
  });

  test("should update on remove topping", () => {
    const toppingCheckbox = screen.getByRole("checkbox");
    const displayPrice = screen.getByRole("heading", { name: /grand total/i });

    userEvent.click(toppingCheckbox);
    expect(displayPrice).not.toHaveTextContent("$ 0");

    userEvent.click(toppingCheckbox);
    expect(displayPrice).toHaveTextContent("$ 0");
  });
});
