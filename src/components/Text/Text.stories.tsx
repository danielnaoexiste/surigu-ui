import { ComponentStory, ComponentMeta } from "@storybook/react";

import Box from "../Box";
import { Text } from "./Text";

import TextDocs from "../../docs/TextDocs.mdx";

export default {
  component: Text,
  title: "Typo/Text",
  parameters: {
    docs: {
      page: TextDocs,
    },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => (
  <Box
    m="0 auto"
    height="90vh"
    display="flex"
    maxWidth="300px"
    alignItems="center"
    justifyContent="center"
  >
    <Text {...args}>{args.children}</Text>
  </Box>
);

export const Default = Template.bind({});
export const Truncated = Template.bind({});

Default.args = {
  fontSize: "16px",
  color: "white",
  truncate: false,
  children:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum maxime fugiat sed tempora debitis repudiandae?",
};

Truncated.args = {
  fontSize: "16px",
  color: "white",
  truncate: true,
  children:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum maxime fugiat sed tempora debitis repudiandae?",
};
