import * as React from "react";
import { Context } from "./types";

const orderContext = React.createContext<Context>({
  addAnOption: () => {},
  options: {
    scoops: [],
    toppings: [],
  },
  totalPrice: 0,
});

export default orderContext;
