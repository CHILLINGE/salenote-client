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
    date: new Date("2020-04-08T17:01:55Z"),
    year: "2020",
    currency: "KRW",
    initialPrice: 1050000,
    finalPrice: 1050000,
    discountPercent: 0,
  },
  {
    date: new Date("2020-04-08T17:01:55Z"),
    year: "2020",
    currency: "KRW",
    initialPrice: 1050000,
    finalPrice: 210000,
    discountPercent: 80,
  },
  {
    date: new Date("2020-04-08T17:01:55Z"),
    year: "2020",
    currency: "KRW",
    initialPrice: 1050000,
    finalPrice: 1050000,
    discountPercent: 20,
  },
  {
    date: new Date("2020-04-08T17:01:55Z"),
    year: "2020",
    currency: "KRW",
    initialPrice: 1050000,
    finalPrice: 1050000,
    discountPercent: 20,
  },
  {
    date: new Date("2020-04-08T17:01:55Z"),
    year: "2020",
    currency: "KRW",
    initialPrice: 1050000,
    finalPrice: 1050000,
    discountPercent: 25,
  },
  {
    date: new Date("2020-04-08T17:01:55Z"),
    year: "2020",
    currency: "KRW",
    initialPrice: 1050000,
    finalPrice: 1050000,
    discountPercent: 40,
  },
  {
    date: new Date("2020-04-08T17:01:55Z"),
    year: "2020",
    currency: "KRW",
    initialPrice: 1050000,
    finalPrice: 1050000,
    discountPercent: 5,
  },
  {
    date: new Date("2020-04-08T17:01:55Z"),
    year: "2020",
    currency: "KRW",
    initialPrice: 1050000,
    finalPrice: 1050000,
    discountPercent: 5,
  },
  {
    date: new Date("2020-04-08T17:01:55Z"),
    year: "2020",
    currency: "KRW",
    initialPrice: 1050000,
    finalPrice: 1050000,
    discountPercent: 25,
  },
  {
    date: new Date("2020-04-08T17:01:55Z"),
    year: "2020",
    currency: "KRW",
    initialPrice: 1050000,
    finalPrice: 1050000,
    discountPercent: 25,
  },
  {
    date: new Date("2020-04-08T17:01:55Z"),
    year: "2020",
    currency: "KRW",
    initialPrice: 1050000,
    finalPrice: 1050000,
    discountPercent: 25,
  },
  {
    date: new Date("2020-04-08T17:01:55Z"),
    year: "2020",
    currency: "KRW",
    initialPrice: 1050000,
    finalPrice: 1050000,
    discountPercent: 70,
  },
]);
