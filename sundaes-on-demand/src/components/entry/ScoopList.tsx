/* Types */
import { useGetItems } from "../../hooks";
import { Item } from "../../types";

/* Components */
import { ScoopOtion } from "./";
import { AlertBanner } from "../common";

/* Local Types */

function ScoopList() {
  const { status, data: scoops, error } = useGetItems("scoops");

  if (status === "LOADING") {
    return <p role="status">Loading...</p>;
  }

  if (status === "FAILURE") {
    return <AlertBanner message={error?.message} />;
  }

  return (
    <ul className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 mt-4 items-center">
      {scoops.map((item: Item) => (
        <ScoopOtion
          key={item.name}
          name={item.name}
          imagePath={item.imagePath}
          price={item.price}
        />
      ))}
    </ul>
  );
}

export default ScoopList;
