import { Meta, Story } from "@storybook/react/types-6-0";

import { SeasonSaleProbabilityPhrase, SeasonSaleProbabilityPhraseProps } from "./SeasonSaleProbabilityPhrase";

export default {
  title: "SeasonSaleProbabilityPhrase",
  component: SeasonSaleProbabilityPhrase,
} as Meta;

const Template: Story<SeasonSaleProbabilityPhraseProps> = (args) => <SeasonSaleProbabilityPhrase {...args} />;

export const Default = Template.bind({});
Default.args = {
  seasonSaleCombo: "아주높음",
  nextSeasonSaleKey: "autumn",
};
