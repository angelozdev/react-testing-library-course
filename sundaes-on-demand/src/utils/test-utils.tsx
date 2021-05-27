import React from "react";
import { render, RenderOptions } from "@testing-library/react";

/* Contexts */
import { Order } from "../contexts";

const Providers: React.FC = ({ children }) => {
  return <Order.Provider>{children}</Order.Provider>;
};

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, "queries">
) => {
  render(ui, { wrapper: Providers, ...options });
};

export * from "@testing-library/react";
export { customRender as render };
