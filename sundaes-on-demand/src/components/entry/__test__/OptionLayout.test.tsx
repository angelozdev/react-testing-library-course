import { render, screen } from "../../../utils/test-utils";
import userEvent from "@testing-library/user-event";
import { OptionLayout, ScoopList } from "../";

describe("on change scoops quantities", () => {
  test("change display of price", async () => {
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
});
