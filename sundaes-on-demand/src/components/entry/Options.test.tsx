import { render, screen } from "@testing-library/react";

/* Component */
import { Options } from "./";

describe("display images from server", () => {
  test("each scoop", async () => {
    render(<Options type="scoops" />);

    // get all images
    const scoopImages = await screen.findAllByRole("img", {
      name: /scoops?$/i,
    });

    expect(scoopImages).toHaveLength(2);

    const altTexts = scoopImages.map((e) => (e as HTMLImageElement).alt);
    const expectedAltTexts = ["Chocolate scoop", "Vanilla scoop"];

    expect(altTexts).toEqual(expectedAltTexts);
  });

  test("each topping", async () => {
    render(<Options type="toppings" />);

    // get all images
    const toppingImages = await screen.findAllByRole("img", {
      name: /toppings?$/i,
    });

    expect(toppingImages).toHaveLength(3);

    const altTexts = toppingImages.map((e) => (e as HTMLImageElement).alt);
    const expectedAltTexts = [
      "Mochi topping",
      "Cherries topping",
      "M&Ms topping",
    ];

    expect(altTexts).toEqual(expectedAltTexts);
  });
});
