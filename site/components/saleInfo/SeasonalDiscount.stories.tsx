import { Meta, Story } from "@storybook/react/types-6-0";

import { SeasonalDiscount } from "./SeasonalDiscount";

export default {
  title: "SeasonalDiscount",
  component: SeasonalDiscount,
} as Meta;

const Template: Story = () => <SeasonalDiscount />;

export const Default = Template.bind({});
