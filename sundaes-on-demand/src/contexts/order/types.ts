import { Scoop, Topping } from "../../types";

export interface Options {
  scoops: Array<Scoop>;
  toppings: Array<Topping>;
}

export type Context = {
  options: Options;
  removeScoopOption: (scoop: Scoop) => void;
  addScoopOption: (scoop: Scoop) => void;
  addToppingOption: (topping: Topping) => void;
  removeToppingOption: (topping: Topping) => void;
  totals: {
    scoops: number;
    toppings: number;
    grandTotal: number;
  };
};
