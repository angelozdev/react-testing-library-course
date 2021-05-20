import classNames from "classnames";

interface Props {
  message?: string;
  variant?: "red" | "green" | "yellow" | "blue" | "indigo" | "purple" | "pink";
}

function AlertBanner({
  message = "An unexpected error ocurred. Please try again later.",
  variant = "red",
}: Props) {
  return (
    <div
      className={classNames(
        `bg-${variant}-200 text-${variant}-900 border-${variant}-900`,
        "p-3 mt-2 border-l-4"
      )}
      role="alert"
    >
      <p>{message}</p>
    </div>
  );
}

export default AlertBanner;
