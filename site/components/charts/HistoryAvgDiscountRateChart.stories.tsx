import { Meta, Story } from "@storybook/react/types-6-0";

import { decodeHistoryAvgDRate } from "./formatting/FormatHistoryAvgDRate";
import { HistoryAvgDiscountRateChart, HistoryAvgDProps } from "./HistoryAvgDiscountRateChart";

export default {
  title: "HistoryAvgDiscountRateChart",
  component: HistoryAvgDiscountRateChart,
} as Meta;

const Template: Story<HistoryAvgDProps> = (args) => <HistoryAvgDiscountRateChart {...args} />;

export const Default = Template.bind({});
Default.args = decodeHistoryAvgDRate([
  {
    zonedDateTime: "2022-03-12T15:06:07Z",
    currency: "KRW",
    initialPrice: 1050000,
    finalPrice: 1050000,
    discountPercent: 0,
  },
  {
    zonedDateTime: "2020-04-08T17:01:55Z",
    currency: "KRW",
    initialPrice: 1050000,
    finalPrice: 210000,
    discountPercent: 80,
  },
  {
    zonedDateTime: "2020-04-08T17:01:55Z",
    currency: "KRW",
    initialPrice: 1050000,
    finalPrice: 1050000,
    discountPercent: 20,
  },
  {
    zonedDateTime: "2020-04-08T17:01:55Z",
    currency: "KRW",
    initialPrice: 1050000,
    finalPrice: 1050000,
    discountPercent: 20,
  },
  {
    zonedDateTime: "2020-04-08T17:01:55Z",
    currency: "KRW",
    initialPrice: 1050000,
    finalPrice: 1050000,
    discountPercent: 25,
  },
  {
    zonedDateTime: "2020-04-08T17:01:55Z",
    currency: "KRW",
    initialPrice: 1050000,
    finalPrice: 1050000,
    discountPercent: 40,
  },
  {
    zonedDateTime: "2020-04-08T17:01:55Z",
    currency: "KRW",
    initialPrice: 1050000,
    finalPrice: 1050000,
    discountPercent: 5,
  },
  {
    zonedDateTime: "2020-04-08T17:01:55Z",
    currency: "KRW",
    initialPrice: 1050000,
    finalPrice: 1050000,
    discountPercent: 5,
  },
  {
    zonedDateTime: "2020-04-08T17:01:55Z",
    currency: "KRW",
    initialPrice: 1050000,
    finalPrice: 1050000,
    discountPercent: 25,
  },
  {
    zonedDateTime: "2020-04-08T17:01:55Z",
    currency: "KRW",
    initialPrice: 1050000,
    finalPrice: 1050000,
    discountPercent: 25,
  },
  {
    zonedDateTime: "2020-04-08T17:01:55Z",
    currency: "KRW",
    initialPrice: 1050000,
    finalPrice: 1050000,
    discountPercent: 25,
  },
  {
    zonedDateTime: "2020-04-08T17:01:55Z",
    currency: "KRW",
    initialPrice: 1050000,
    finalPrice: 1050000,
    discountPercent: 70,
  },
]);
