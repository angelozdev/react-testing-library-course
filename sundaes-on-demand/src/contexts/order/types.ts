import { Item } from "../../types";

export interface Options {
  scoops: Array<Item>;
  toppings: Array<Item>;
}

export type Context = {
  options: Options;
  removeScoopOption: (scoop: Item) => void;
  addScoopOption: (scoop: Item) => void;
  totals: {
    scoops: number;
    toppings: number;
    grandTotal: number;
  };
};
