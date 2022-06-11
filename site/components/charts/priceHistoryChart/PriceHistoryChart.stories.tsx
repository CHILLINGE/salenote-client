import { Meta, Story } from "@storybook/react/types-6-0";

import { PriceHistoryChart, PriceHistoryChartProps } from "./PriceHistoryChart";

export default {
  title: "PriceHistoryChart",
  component: PriceHistoryChart,
} as Meta;

const Template: Story<PriceHistoryChartProps> = (args) => <PriceHistoryChart {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: [
    {
      id: "japan",
      color: "hsl(71, 70%, 50%)",
      data: [
        {
          x: "19.06",
          y: 175,
        },
        {
          x: "19.09",
          y: 133,
        },
        {
          x: "20.01",
          y: 256,
        },
        {
          x: "20.05",
          y: 62,
        },
        {
          x: "20.09",
          y: 145,
        },
        {
          x: "20.12",
          y: 203,
        },
        {
          x: "21.01",
          y: 194,
        },
        {
          x: "21.05",
          y: 212,
        },
        {
          x: "21.09",
          y: 242,
        },
        {
          x: "21.12",
          y: 277,
        },
        {
          x: "22.01",
          y: 254,
        },
        {
          x: "22.05",
          y: 205,
        },
      ],
    },
  ],
};
