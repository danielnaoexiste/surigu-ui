import { themes } from "@storybook/theming";
import { addDecorator } from "@storybook/react";

import defaultTheme from "../src/providers/theme";
import { ThemeProvider } from "styled-components";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme: themes.dark,
    inlineStories: true,
  },
};

function withTheme(storyFn) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <div id="app-root">{storyFn()}</div>
      <div id="modal-root"></div>
    </ThemeProvider>
  );
}

addDecorator(withTheme);
