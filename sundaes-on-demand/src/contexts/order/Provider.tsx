import * as React from "react";
import { Context } from ".";
import { Item, OptionTypes } from "../../types";
import { Options, Context as ContextTypes } from "./types";

interface Props {
  children: React.ReactNode;
}

function Provider({ children }: Props) {
  const [options, setOptions] = React.useState<Options>({
    scoops: [],
    toppings: [],
  });

  const [totalPrice, setTotalPrice] = React.useState(0);

  const addAnOption = React.useCallback(
    (item: Item, type: OptionTypes): void => {
      const newOptions = {
        ...options,
        [type]: [...options[type], item],
      };
      setOptions(newOptions);
    },
    [options]
  );

  const updateTotal = React.useCallback(() => {
    const sumReduce = (cur: number, acc: Item) => {
      return cur + acc.price;
    };

    const scoopsTotalPrice = options.scoops.reduce(sumReduce, 0);
    const toppingsTotalPrice = options.toppings.reduce(sumReduce, 0);

    setTotalPrice(scoopsTotalPrice + toppingsTotalPrice);
  }, [options]);

  React.useEffect(() => {
    updateTotal();
  }, [options, updateTotal]);

  const value: ContextTypes = React.useMemo(() => {
    return { options, addAnOption, totalPrice };
  }, [options, addAnOption, totalPrice]);

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export default Provider;
