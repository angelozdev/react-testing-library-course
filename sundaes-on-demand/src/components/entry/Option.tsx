import * as React from "react";
import { Item, OptionTypes } from "../../types";

export interface Props extends Item {
  type: OptionTypes;
}

function Option({ name, imagePath, type, price }: Props) {
  const [quantity, setQuantity] = React.useState<number>(0);

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
          Price:{" "}
          <strong>
            $<span>{price}</span>
          </strong>
        </p>

        <input
          className="border w-full py-1 px-3"
          min="0"
          role="spinbutton"
          type="number"
          name={name}
          value={quantity}
          onChange={({ target }) => setQuantity(Number(target.value))}
        />
      </div>
    </li>
  );
}

export default Option;
