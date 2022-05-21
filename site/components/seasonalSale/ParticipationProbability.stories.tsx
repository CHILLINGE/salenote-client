import { Meta, Story } from "@storybook/react/types-6-0";

import { ParticipationProbability, ParticipationProbabilityProps } from "./ParticipationProbability";

export default {
  title: "ParticipationProbability",
  component: ParticipationProbability,
} as Meta;

const Template: Story<ParticipationProbabilityProps> = (args) => {
  return <ParticipationProbability {...args} />;
};

export const Basic = Template.bind({});
Basic.args = {
  figureNameList: ["낮음", "보통", "높음", "아주높음"],
  seasonSaleCombo: "아주높음",
  nextSeasonName: "가을 세일 (Autumn Sale)",
} as ParticipationProbabilityProps;
