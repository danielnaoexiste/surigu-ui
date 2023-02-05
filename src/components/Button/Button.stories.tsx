import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Button } from "./Button";
import { MdSettings } from "react-icons/md";
import Box from "../Box";

import ButtonDocs from "../../docs/ButtonDocs.mdx";

export default {
  title: "Form/Button",
  component: Button,
  argTypes: {
    label: {
      control: { type: "text" },
      description: "Text to be displayed inside the button.",
      defaultValue: "button",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Disables the button.",
      defaultValue: false,
    },
    variant: {
      control: { type: "radio" },
      options: ["primary", "secondary", "danger", "neutral"],
      description: "Sets the button variant.",
    },
    size: {
      control: { type: "radio" },
      options: ["sm", "md", "lg", "xlg"],
      description: "Sets the button size.",
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
  parameters: {
    docs: {
      page: ButtonDocs,
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Box>
    <Button {...args} />
  </Box>
);

export const Primary = Template.bind({});
export const Secondary = Template.bind({});
export const Danger = Template.bind({});
export const Neutral = Template.bind({});
export const TextBtn = Template.bind({});
export const Prefix = Template.bind({});

Primary.args = {
  label: "primary",
  variant: "primary",
};

Secondary.args = {
  label: "secondary",
  variant: "secondary",
};

Danger.args = {
  label: "danger",
  variant: "danger",
};

Neutral.args = {
  label: "neutral",
  variant: "neutral",
};

TextBtn.args = {
  label: "text",
  variant: "text",
};

Prefix.args = {
  label: "prefixed",
  variant: "primary",
  prefix: <MdSettings />,
};
