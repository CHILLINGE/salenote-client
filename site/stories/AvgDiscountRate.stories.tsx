import { Meta, Story } from "@storybook/react/types-6-0";
import React from "react";

import { AvgDiscountRate, AvgDiscountRateProps } from "../components/saleInfo/AvgDiscountRate";

export default {
  component: AvgDiscountRate,
  title: "AvgDiscountRate",
} as Meta;

const Template: Story<AvgDiscountRateProps> = (args) => <AvgDiscountRate {...args} />;

export const Default = Template.bind({});
Default.args = {
  avgDiscountRate: 50,
} as AvgDiscountRateProps;
