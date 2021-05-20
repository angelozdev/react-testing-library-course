import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { rest } from "msw";
// eslint-disable-next-line jest/no-mocks-import
import { server } from "../../__mocks__";

/* Components */
import { Options } from "./";

describe("initial state", () => {
  test("should start loading", async () => {
    render(<Options type="scoops" />);

    const loaderElement = screen.getByRole("status");

    expect(loaderElement).toBeInTheDocument();

    await waitForElementToBeRemoved(() => {
      return screen.getByRole("status");
    });
  });
});

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

describe("handle errors", () => {
  test("handle errors for sccops", async () => {
    render(<Options type="scoops" />);

    server.resetHandlers(
      rest.get("http://localhost:3030/scoops", (_, res, ctx) => {
        return res(ctx.status(500));
      })
    );

    const alerts = await screen.findByRole("alert");

    expect(alerts).toBeInTheDocument();
  });

  test("handle errors for toppings", async () => {
    render(<Options type="toppings" />);

    server.resetHandlers(
      rest.get("http://localhost:3030/toppings", (_, res, ctx) => {
        return res(ctx.status(500), ctx.json("sadadasdsa"));
      })
    );

    await waitFor(() => {
      const alerts = screen.getByRole("alert");

      expect(alerts).toBeInTheDocument();
    });
  });
});
