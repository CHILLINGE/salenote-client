import { Meta, Story } from "@storybook/react/types-6-0";

import { SeasonSaleProbability, SeasonSaleProbabilityProps } from "./SeasonSaleProbability";

export default {
  title: "SeasonSaleProbability",
  component: SeasonSaleProbability,
} as Meta;

const Template: Story<SeasonSaleProbabilityProps> = (args) => {
  return <SeasonSaleProbability {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  seasonSaleCombo: "아주높음",
  nextSeasonName: "가을 세일 (Autumn Sale)",
} as SeasonSaleProbabilityProps;
