import * as React from "react";
import axios from "axios";

/* Components */
import { Option } from ".";
import { Item, OptionTypes } from "../../types";

/* Local Types */
interface Props {
  type: OptionTypes;
}

function Options({ type }: Props) {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    axios
      .get(`http://localhost:3030/${type}`)
      .then(({ data }) => setData(data))
      .catch(console.error);
  }, [type]);

  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold capitalize">{type}</h2>
      <ul className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 mt-4 items-center">
        {Boolean(data.length) &&
          data.map((item: Item) => (
            <Option
              key={item.name}
              name={item.name}
              imagePath={item.imagePath}
              type={type}
            />
          ))}
      </ul>
    </div>
  );
}

export default Options;
