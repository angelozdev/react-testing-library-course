import * as React from "react";

/* Contexts */
import { Order } from "../../contexts";

/* Utils */
import { formatCurrency } from "../../utils";

function GrandTotal() {
  const {
    totals: { grandTotal },
  } = React.useContext(Order.Context);

  return (
    <h2 className="text-3xl">
      Grand Total:{" "}
      <strong className="text-gray-800">{formatCurrency(grandTotal)}</strong>
    </h2>
  );
}

export default GrandTotal;
