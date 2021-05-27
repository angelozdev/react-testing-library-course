import React from "react";
import { useHistory } from "react-router-dom";

/* Contexts */
import { Order } from "../../contexts";

/* Utils */
import { formatCurrency } from "../../utils";

function GrandTotal() {
  const history = useHistory();
  const {
    totals: { grandTotal },
  } = React.useContext(Order.Context);

  return (
    <div>
      <h2 className="text-3xl">
        Grand Total:{" "}
        <strong className="text-gray-800">{formatCurrency(grandTotal)}</strong>
      </h2>

      <button
        onClick={() => history.push("/summary")}
        disabled={grandTotal <= 0}
        className="bg-green-500 p-2 text-white disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <span className="px-2">Continue...</span>
      </button>
    </div>
  );
}

export default GrandTotal;
