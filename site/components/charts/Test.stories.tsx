import { Meta, Story } from "@storybook/react/types-6-0";

import { ChartTest, TestProps } from "./ChartTest";

export default {
  title: "chartTest",
  component: ChartTest,
} as Meta;

const Template: Story<TestProps> = (args) => <ChartTest {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: [
    {
      country: "",
      "hot dog": 54,
      "hot dogColor": "hsl(198, 70%, 50%)",
      burger: 159,
      burgerColor: "hsl(37, 70%, 50%)",
      sandwich: 64,
      sandwichColor: "hsl(243, 70%, 50%)",
      kebab: 77,
      kebabColor: "hsl(116, 70%, 50%)",
      fries: 74,
      friesColor: "hsl(161, 70%, 50%)",
      donut: 70,
      donutColor: "hsl(287, 70%, 50%)",
    },
    {
      country: "AE",
      "hot dog": 39,
      "hot dogColor": "hsl(1, 70%, 50%)",
      burger: 66,
      burgerColor: "hsl(309, 70%, 50%)",
      sandwich: 192,
      sandwichColor: "hsl(322, 70%, 50%)",
      kebab: 28,
      kebabColor: "hsl(141, 70%, 50%)",
      fries: 111,
      friesColor: "hsl(356, 70%, 50%)",
      donut: 76,
      donutColor: "hsl(294, 70%, 50%)",
    },
    {
      country: "AF",
      "hot dog": 102,
      "hot dogColor": "hsl(43, 70%, 50%)",
      burger: 127,
      burgerColor: "hsl(194, 70%, 50%)",
      sandwich: 24,
      sandwichColor: "hsl(251, 70%, 50%)",
      kebab: 32,
      kebabColor: "hsl(182, 70%, 50%)",
      fries: 75,
      friesColor: "hsl(117, 70%, 50%)",
      donut: 92,
      donutColor: "hsl(39, 70%, 50%)",
    },
  ],
} as TestProps;
