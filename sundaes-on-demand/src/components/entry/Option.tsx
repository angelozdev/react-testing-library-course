import { Item, OptionTypes } from "../../types";

export interface Props extends Item {
  type: OptionTypes;
}

function ScoopOption({ name, imagePath, type }: Props) {
  return (
    <li className="border p-4 hover:shadow-lg transition-shadow cursor-pointer w-full h-full">
      <figure>
        <img
          className="object-cover mx-auto"
          src={`http://localhost:3030/${imagePath}`}
          alt={`${name} ${type.replace(/s$/, "")}`}
        />
      </figure>
    </li>
  );
}

export default ScoopOption;
