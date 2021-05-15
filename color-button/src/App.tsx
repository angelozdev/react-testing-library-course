import * as React from "react";
import "./App.css";

/* Components */
import { Button, Checkbox } from "./components";

function App() {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <div className="p-4">
      <div className="flex justify-center items-center flex-col">
        <Button checked={checked} />
        <Checkbox handleChange={handleChange} checked={checked} />
      </div>
    </div>
  );
}

export default App;
