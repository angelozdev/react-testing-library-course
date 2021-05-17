import { rest } from "msw";

/* Mocks */
import { scoopsMock, toppingsMock } from "./";

export const handlers = [
  rest.get("http://localhost:3030/scoops", (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(scoopsMock));
  }),

  rest.get("http://localhost:3030/toppings", (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(toppingsMock));
  }),
];

export default handlers;
