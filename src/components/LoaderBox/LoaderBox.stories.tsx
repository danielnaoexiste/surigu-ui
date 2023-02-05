import { ComponentStory, ComponentMeta } from "@storybook/react";

import { LoaderBox } from "./LoaderBox";

export default {
  component: LoaderBox,
  title: "Feedback/LoaderBox",
} as ComponentMeta<typeof LoaderBox>;

const Template: ComponentStory<typeof LoaderBox> = () => <LoaderBox />;

export const Default = Template.bind({});
