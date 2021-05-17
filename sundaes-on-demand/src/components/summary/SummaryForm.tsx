import * as React from "react";

function SummaryForm() {
  const [checked, setChecked] = React.useState<boolean>(false);
  const [showPopover, setShowPopover] = React.useState<boolean>(false);

  return (
    <form>
      <label className="relative block cursor-pointer">
        <input
          onChange={(e) => setChecked(e.target.checked)}
          checked={checked}
          type="checkbox"
        />
        I agree to{" "}
        <span
          onMouseEnter={() => setShowPopover(true)}
          onMouseLeave={() => setShowPopover(false)}
          className="underline hover:text-blue-900"
        >
          terms and conditions
        </span>
        <div
          hidden={!showPopover}
          role="tooltip"
          className="border p-2 bg-indigo-100 absolute top-6 z-10"
        >
          <p>No ice cream will actually be delivered</p>
        </div>
      </label>

      <button
        className="disabled:opacity-50 disabled:cursor-not-allowed p-2 bg-green-500 text-white"
        disabled={!checked}
        type="submit"
      >
        <span className="px-2">Confirm order</span>
      </button>
    </form>
  );
}

export default SummaryForm;
