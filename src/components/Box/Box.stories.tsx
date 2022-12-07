import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Box } from "./Box";

export default {
  component: Box,
  title: "Layout/Box",
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = (args) => (
  <Box {...args}>{args.children}</Box>
);

export const Example = Template.bind({});

Example.args = {
  marginBottom: 10,
  color: "blue",
  children: "Froggy",
};
