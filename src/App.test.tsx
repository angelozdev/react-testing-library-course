import * as React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("Link element should be in the <App />", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);

  expect(linkElement).toBeInTheDocument();
});
