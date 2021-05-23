import * as React from "react";

/* Components */
import { Option } from ".";
import { AlertBanner } from "../common";
import { Item, OptionTypes } from "../../types";

/* Hooks */
import { useGetItems } from "../../hooks";
import { Order } from "../../contexts";
import { formatCurrency } from "../../utils";

/* Local Types */
interface Props {
  type: OptionTypes;
}

function Options({ type }: Props) {
  const { status, data, error } = useGetItems(type);
  const { totals } = React.useContext(Order.Context);

  return (
    <div className="mb-6">
      {status === "FAILURE" && (
        <AlertBanner message={error?.message} variant="red" />
      )}

      {status === "LOADING" && <p role="status">Loading...</p>}

      {status === "SUCCESS" && (
        <React.Fragment>
          <h2 className="text-xl font-semibold capitalize">{type}</h2>

          <p className="capitalize">
            {type} total: <strong>{formatCurrency(totals[type])}</strong>
          </p>

          <ul className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 mt-4 items-center">
            {data.map((item: Item) => (
              <Option
                key={item.name}
                name={item.name}
                imagePath={item.imagePath}
                type={type}
                price={item.price}
              />
            ))}
          </ul>
        </React.Fragment>
      )}
    </div>
  );
}

export default Options;
