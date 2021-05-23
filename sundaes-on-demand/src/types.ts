export interface Item {
  name: string;
  imagePath: string;
  price: number;
  quantity?: number;
}

export type OptionTypes = "scoops" | "toppings";
