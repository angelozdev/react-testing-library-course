import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "../../../utils/test-utils";
import { rest } from "msw";
// eslint-disable-next-line jest/no-mocks-import
import { server } from "../../../__mocks__";

/* Components */
import { ScoopList } from "../";

test("should start loading", async () => {
  render(<ScoopList />);

  const loaderElement = screen.getByRole("status");

  expect(loaderElement).toBeInTheDocument();

  await waitForElementToBeRemoved(() => {
    return screen.getByRole("status");
  });
});

test("show alert on server error", async () => {
  render(<ScoopList />);
  server.resetHandlers(
    rest.get("http://localhost:3030/scoops", (_, res, ctx) => {
      return res(ctx.status(500));
    })
  );

  const alertBannerElement = await screen.findByRole("alert");

  expect(alertBannerElement).toBeInTheDocument();
});
