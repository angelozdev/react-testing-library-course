import { Item, OptionTypes } from "../../types";

export interface Options {
  scoops: Array<Item>;
  toppings: Array<Item>;
}

export type Context = {
  options: Options;
  addAnOption: (item: Item, type: OptionTypes) => void;
  removeAnOption: (item: Item, type: OptionTypes) => void;
  addScoopOption: (scoop: Item) => void;
  totals: {
    scoops: number;
    toppings: number;
    grandTotal: number;
  };
};
