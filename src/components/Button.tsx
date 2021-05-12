import * as React from "react";

/* Local types */
type Backgrounds = "blue" | "red";
interface Props {
  checked: boolean;
}

function Button({ checked }: Props) {
  const [backgroundColor, setBackgroundColor] =
    React.useState<Backgrounds>("blue");

  const nextBackgroundgColor: Backgrounds =
    backgroundColor === "blue" ? "red" : "blue";

  const handleClick = () => {
    setBackgroundColor(nextBackgroundgColor);
  };

  return (
    <button
      disabled={checked}
      onClick={handleClick}
      className={`text-white p-2 rounded-md bg-${
        checked ? "gray" : backgroundColor
      }-500 disabled:opacity-50`}
    >
      <span className="px-4 inline-block">
        Change to {nextBackgroundgColor}
      </span>
    </button>
  );
}

export default Button;
