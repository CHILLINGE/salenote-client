import { Meta, Story } from "@storybook/react/types-6-0";

import { PastDiscountTable, PastDiscountTableProps } from "./PastDiscountTable";

export default {
  title: "PastDiscountTable",
  component: PastDiscountTable,
} as Meta;

const Template: Story<PastDiscountTableProps> = (args) => <PastDiscountTable {...args} />;

export const Default = Template.bind({});
Default.args = {
  saleNameList: ["설날", "여름", "가을", "할로윈", "겨울"],
  saleYearList: [2022, 2021, 2020, 2019],
};
