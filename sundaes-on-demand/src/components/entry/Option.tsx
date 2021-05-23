import * as React from "react";
import { Order } from "../../contexts";
import { useStateWithCallback } from "../../hooks";
import { Item, OptionTypes } from "../../types";
import { formatCurrency } from "../../utils";

export interface Props extends Item {
  type: OptionTypes;
}

function Option({ name, imagePath, type, price }: Props) {
  const { addAnOption, removeAnOption } = React.useContext(Order.Context);

  const callback = (quantity: number) => {
    const item: Item = {
      price,
      imagePath,
      name,
      quantity,
    };

    if (quantity > 0) {
      addAnOption(item, type);
    }

    if (quantity <= 0) {
      removeAnOption(item, type);
    }
  };

  const [quantity, setQuantity] = useStateWithCallback<number>(0, callback);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;

    setQuantity(Number(newValue));
  };

  return (
    <li className="border p-4 hover:shadow-lg transition-shadow cursor-pointer w-full h-full">
      <figure>
        <img
          className="object-cover mx-auto"
          src={`http://localhost:3030/${imagePath}`}
          alt={`${name} ${type.replace(/s$/, "")}`}
        />
      </figure>

      <div className="mt-5">
        <p>
          Price: <strong>{formatCurrency(price)}</strong>
        </p>

        <input
          className="border w-full py-1 px-3"
          min="0"
          role="spinbutton"
          type="number"
          name={name}
          value={quantity}
          onChange={handleChange}
        />
      </div>
    </li>
  );
}

export default Option;
