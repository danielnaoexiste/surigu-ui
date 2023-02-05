import { ComponentStory, ComponentMeta } from "@storybook/react";

import Box from "../Box/index";
import { Loading } from "./Loading";

export default {
  component: Loading,
  title: "Feedback/Loading",
} as ComponentMeta<typeof Loading>;

const Template: ComponentStory<typeof Loading> = (args) => (
  <Loading {...args} />
);

export const Default = Template.bind({});

Default.args = {
  size: "small",
};
