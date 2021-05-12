import * as React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("Link element should be in the <App />", () => {
  const { getByRole } = render(<App />);
  const linkElement = getByRole("link", {
    name: /learn react/i,
  });

  expect(linkElement).toBeInTheDocument();
});
