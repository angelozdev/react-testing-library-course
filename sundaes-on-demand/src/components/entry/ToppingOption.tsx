import * as React from "react";
import { Order } from "../../contexts";
import { useStateWithCallback } from "../../hooks";
import { Item, Topping } from "../../types";
import { formatCurrency } from "../../utils";

function ToppingOption({ name, imagePath, price }: Item) {
  const { addToppingOption, removeToppingOption } = React.useContext(
    Order.Context
  );

  const callback = (checked: boolean) => {
    const item: Topping = {
      price,
      imagePath,
      name,
      checked,
    };

    if (checked) {
      addToppingOption(item);
    } else {
      removeToppingOption(item);
    }
  };

  const [checked, setChecked] = useStateWithCallback<boolean>(false, callback);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.checked;

    setChecked(newValue);
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

        <label className="mt-2 block">
          Add
          <input
            className="border w-full py-1 px-3"
            role="spinbutton"
            type="checkbox"
            name={name}
            checked={checked}
            onChange={handleChange}
          />
        </label>
      </div>
    </li>
  );
}

export default ToppingOption;
