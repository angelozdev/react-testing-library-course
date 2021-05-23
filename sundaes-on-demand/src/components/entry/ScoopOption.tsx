import * as React from "react";
import { Order } from "../../contexts";
import { useStateWithCallback } from "../../hooks";
import { Item } from "../../types";
import { formatCurrency } from "../../utils";

function ScoopOption({ name, imagePath, price }: Omit<Item, "quantity">) {
  const { addScoopOption } = React.useContext(Order.Context);

  const callback = (quantity: number) => {
    const item: Item = {
      price,
      imagePath,
      name,
      quantity,
    };

    if (quantity > 0) {
      addScoopOption(item);
    }

    if (quantity <= 0) {
      // TODO: Add way to remove scoop
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
          alt={`${name} scoop`}
        />
      </figure>

      <div className="mt-5">
        <p>
          Price: <strong>{formatCurrency(price)}</strong>
        </p>

        <input
          className="border w-full py-1 px-3"
          min="0"
          max="100"
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

export default ScoopOption;
