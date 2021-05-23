import * as React from "react";

/* Components */
import { OptionTypes } from "../../types";
import { Order } from "../../contexts";
import { formatCurrency } from "../../utils";

/* Local Types */
interface Props {
  title: string;
  type: OptionTypes;
  children: React.ReactNode;
}

function Options({ title, type, children }: Props) {
  const { totals } = React.useContext(Order.Context);

  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold capitalize">{title}</h2>

      <p className="capitalize">
        {type} total: <strong>{formatCurrency(totals[type])}</strong>
      </p>

      <div>{children}</div>
    </div>
  );
}

export default Options;
