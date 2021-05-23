import * as React from "react";
import { Context } from ".";
import { Item } from "../../types";
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

  const addScoopOption = React.useCallback(
    (item: Item): void => {
      const newOptions = {
        ...options,
        scoops: [...options.scoops.filter((i) => i.name !== item.name), item],
      };

      setOptions(newOptions);
    },
    [options]
  );

  const removeScoopOption = React.useCallback(
    (item: Item) => {
      const newOptions = {
        ...options,
        scoops: [...options.scoops.filter((i) => i.name !== item.name)],
      };

      setOptions(newOptions);
    },
    [options]
  );

  const updateTotal = React.useCallback(() => {
    const sumReduce = (cur: number, acc: Item) => {
      if (typeof acc.quantity !== "number") return cur;
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

  console.log(options);

  const value: ContextTypes = React.useMemo(() => {
    return {
      options,
      totals,
      removeScoopOption,
      addScoopOption,
    };
  }, [options, totals, removeScoopOption, addScoopOption]);

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export default Provider;