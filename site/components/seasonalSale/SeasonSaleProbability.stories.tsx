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
  seasonSaleCombo: "μμ£Όλμ",
  nextSeasonSaleKey: "autumn",
  nextSeasonSaleName: "Autumn Sale",
} as SeasonSaleProbabilityProps;
