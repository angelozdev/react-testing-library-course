import { Item, OptionTypes } from "../../types";

interface Props extends Item {
  type: OptionTypes;
}

function ScoopOption({ name, imagePath, type }: Props) {
  return (
    <li className="border p-4 hover:shadow-lg transition-shadow cursor-pointer w-full h-full">
      <img
        className="object-cover mx-auto"
        src={`http://localhost:3030/${imagePath}`}
        alt={`${name} ${type.replace(/s$/, "")}`}
      />
    </li>
  );
}

export default ScoopOption;
