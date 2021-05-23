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

  const [totals, setTotals] = React.useState({
    scoops: 0,
    toppings: 0,
    grandTotal: 0,
  });

  const addAnOption = React.useCallback(
    (item: Item, type: OptionTypes): void => {
      const newOptions = {
        ...options,
        [type]: [...options[type].filter((i) => i.name !== item.name), item],
      };

      setOptions(newOptions);
    },
    [options]
  );

  const removeAnOption = React.useCallback(
    (item: Item, type: OptionTypes) => {
      const newOptions = {
        ...options,
        [type]: [...options[type].filter((i) => i.name !== item.name)],
      };

      setOptions(newOptions);
    },
    [options]
  );

  const updateTotal = React.useCallback(() => {
    const sumReduce = (cur: number, acc: Item) => {
      if (!acc.quantity) return cur;
      return cur + acc.price * acc.quantity;
    };

    const scoopsTotalPrice = options.scoops.reduce(sumReduce, 0);
    const toppingsTotalPrice = options.toppings.reduce(sumReduce, 0);

    setTotals({
      scoops: scoopsTotalPrice,
      toppings: toppingsTotalPrice,
      grandTotal: scoopsTotalPrice + toppingsTotalPrice,
    });
  }, [options]);

  React.useEffect(() => {
    updateTotal();
  }, [options, updateTotal]);

  const value: ContextTypes = React.useMemo(() => {
    return {
      options,
      addAnOption,
      totals,
      removeAnOption,
    };
  }, [options, addAnOption, totals, removeAnOption]);

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export default Provider;
