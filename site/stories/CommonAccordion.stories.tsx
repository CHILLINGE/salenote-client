import { Meta, Story } from "@storybook/react/types-6-0";
import React from "react";

import { CommonAccordion, CommonAccordionProps } from "../components/common/CommonAccordion";

export default {
  component: CommonAccordion,
  title: "CommonAccordion",
} as Meta;

const Template: Story<CommonAccordionProps> = (args) => <CommonAccordion {...args} />;

export const Default = Template.bind({});
Default.args = {
  summary: "과거의 할인율",
  description: "게임 출시 이후부터 현재 시점까지 진행되었던 할인율들을 확인할 수 있어요.",
} as CommonAccordionProps;
