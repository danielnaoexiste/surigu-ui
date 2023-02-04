import { addons } from "@storybook/addons";
import { create } from "@storybook/theming";

const theme = create({
  base: "dark",
  colorPrimary: "#C979B0",
  colorSecondary: "#8489C2",
  appBg: "#453758",
  appContentBg: "#352A43",
  appBorderColor: "rgba(0,0,0,.1)",
  appBorderRadius: 4,
  textColor: "#FFF",
  brandTitle: "Surigu UI",
  brandUrl: "https://froggy.danielnaoexiste.dev",
});

addons.setConfig({
  theme: theme,
});
