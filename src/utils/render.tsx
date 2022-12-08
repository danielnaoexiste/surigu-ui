import type { FC, ReactNode } from "react";
import { render } from "@testing-library/react";

import defaultTheme from "../providers/theme";
import { ThemeProvider } from "styled-components";

interface Props {
  children: ReactNode | any;
}

const wrapper: FC<Props> = ({ children }) => {
  return <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>;
};

const customRender = (ui: any, options?: any) =>
  render(ui, { wrapper, ...options });

export { customRender as render };
