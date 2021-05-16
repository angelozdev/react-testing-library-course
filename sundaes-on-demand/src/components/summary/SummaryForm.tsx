import * as React from "react";

function SummaryForm() {
  const [checked, setChecked] = React.useState<boolean>(false);

  return (
    <form>
      <label className="block cursor-pointer">
        <input
          onChange={(e) => setChecked(e.target.checked)}
          checked={checked}
          type="checkbox"
        />
        I agree to{" "}
        <a
          className="underline hover:text-blue-900"
          target="_blank"
          rel="noreferrer"
          href="file:///home/angelozdev/Downloads/04%20Checkbox%20Enables%20Button%20Code%20Quiz%20Spec.pdf"
        >
          terms and conditions
        </a>
      </label>

      <button
        className="disabled:opacity-50 p-2 bg-green-500 text-white"
        disabled={!checked}
        type="submit"
      >
        <span className="px-2">Confirm order</span>
      </button>
    </form>
  );
}

export default SummaryForm;
