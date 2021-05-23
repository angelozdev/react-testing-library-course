import * as React from "react";
import { Context } from ".";
import { Scoop, Topping } from "../../types";
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
    (item: Scoop): void => {
      const newOptions = {
        ...options,
        scoops: [...options.scoops.filter((i) => i.name !== item.name), item],
      };

      setOptions(newOptions);
    },
    [options]
  );

  const addToppingOption = React.useCallback(
    (item: Topping): void => {
      const newOptions = {
        ...options,
        toppings: [
          ...options.toppings.filter((i) => i.name !== item.name),
          item,
        ],
      };

      setOptions(newOptions);
    },
    [options]
  );

  const removeScoopOption = React.useCallback(
    (item: Scoop) => {
      const newOptions = {
        ...options,
        scoops: [...options.scoops.filter((i) => i.name !== item.name)],
      };

      setOptions(newOptions);
    },
    [options]
  );

  const removeToppingOption = React.useCallback(
    (item: Topping) => {
      const newOptions = {
        ...options,
        toppings: [...options.toppings.filter((i) => i.name !== item.name)],
      };

      setOptions(newOptions);
    },
    [options]
  );

  const updateTotal = React.useCallback(() => {
    const sumReduce = (cur: number, acc: Scoop | Topping) => {
      if ("quantity" in acc) {
        return cur + acc.price * acc.quantity;
      }

      if ("checked" in acc) {
        return cur + acc.price;
      }

      return cur;
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
      totals,
      removeScoopOption,
      addScoopOption,
      addToppingOption,
      removeToppingOption,
    };
  }, [
    options,
    totals,
    removeScoopOption,
    addScoopOption,
    addToppingOption,
    removeToppingOption,
  ]);

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export default Provider;
