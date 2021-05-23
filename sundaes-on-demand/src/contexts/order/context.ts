import * as React from "react";
import { Context } from "./types";

const orderContext = React.createContext<Context>({
  removeScoopOption: () => {},
  addScoopOption: () => {},
  options: {
    scoops: [],
    toppings: [],
  },
  totals: {
    scoops: 0,
    toppings: 0,
    grandTotal: 0,
  },
});

export default orderContext;
