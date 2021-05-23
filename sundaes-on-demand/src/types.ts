export interface Item {
  name: string;
  imagePath: string;
  price: number;
}

export interface Scoop extends Item {
  quantity: number;
}

export interface Topping extends Item {
  checked: boolean;
}

export type OptionTypes = "scoops" | "toppings";
