import { Meta } from "@storybook/react/types-6-0";

import { HistoryAvgDiscount } from "./HistoryAvgDiscountRate";

export default {
  title: "HistoryAvgDiscountRate",
  component: HistoryAvgDiscount,
} as Meta;

const Template = () => <HistoryAvgDiscount />;

export const Default = Template.bind({});
