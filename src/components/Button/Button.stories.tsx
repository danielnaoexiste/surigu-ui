import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Button } from "./Button";
import { MdSettings } from "react-icons/md";
import Box from "../Box";

export default {
  title: "Form/Button",
  component: Button,
  argTypes: {
    label: {
      control: { type: "text" },
      description: "Text to be displayed inside the button.",
    },
    variant: {
      control: { type: "radio" },
      options: ["contained", "outlined"],
      description: "Sets the button variant.",
    },
    onClick: {
      action: "Button Clicked",
      description: "onClick handler, executes a method on click.",
    },
    prefix: {
      control: false,
      description: "Sets a Prefix Icon. Can be any ReactNode.",
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Box>
    <Button {...args} />
  </Box>
);
export const Contained = Template.bind({});
export const Outlined = Template.bind({});
export const Prefix = Template.bind({});

Contained.args = {
  label: "contained",
  variant: "contained",
};

Outlined.args = {
  label: "outlined",
  variant: "outlined",
};

Prefix.args = {
  label: "Prefixed",
  variant: "contained",
  prefix: <MdSettings />,
};
