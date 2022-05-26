import { Meta, Story } from "@storybook/react/types-6-0";

import { Footer } from "./Footer";

export default {
  title: "layout/Footer",
  component: Footer,
} as Meta;

const Template: Story = (args) => {
  return <Footer {...args} />;
};

export const Basic = Template.bind({});
Basic.args = {};
