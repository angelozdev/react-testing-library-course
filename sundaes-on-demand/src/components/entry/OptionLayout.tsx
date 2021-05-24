import * as React from "react";

/* Components */
import { OptionTypes } from "../../types";
import { Order } from "../../contexts";
import { formatCurrency } from "../../utils";

/* Local Types */
export interface Props {
  title: string;
  type: OptionTypes;
  children: React.ReactNode;
}

function Options({ title, type, children }: Props) {
  const { totals } = React.useContext(Order.Context);

  return (
    <div className="mb-6 border p-4 mt-4">
      <h2 className="text-xl font-semibold capitalize">{title}</h2>

      <p className="capitalize" data-testid="price-display">
        <span>{type}</span> total:{" "}
        <strong className="text-blue-800">
          {formatCurrency(totals[type])}
        </strong>
      </p>

      <div>{children}</div>
    </div>
  );
}

export default Options;
