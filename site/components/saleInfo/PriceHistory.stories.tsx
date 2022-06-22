import { Meta } from "@storybook/react/types-6-0";

import { PriceHistory } from "./PriceHistory";

export default {
  title: "PriceHistory",
  component: PriceHistory,
} as Meta;

const Template = () => <PriceHistory />;

export const Default = Template.bind({});
