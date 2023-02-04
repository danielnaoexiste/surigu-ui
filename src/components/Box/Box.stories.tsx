import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Box } from "./Box";

import BoxDocs from "../../docs/BoxDocs.mdx";

export default {
  component: Box,
  title: "Layout/Box",
  parameters: {
    docs: {
      page: BoxDocs,
    },
  },
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = (args) => (
  <Box {...args}>{args.children}</Box>
);

export const Example = Template.bind({});

Example.args = {
  padding: 10,
  color: "blue",
  children: "Surigu",
  backgroundColor: "#131313",
  width: "fit-content",
};
