import { Meta, Story } from "@storybook/react/types-6-0";
import React from "react";

import { CommonToggle, CommonToggleProps } from "../components/common/CommonAccordion";

export default {
  component: CommonToggle,
  title: "CommonToggle",
} as Meta;

const Template: Story<CommonToggleProps> = (args) => <CommonToggle {...args} />;

export const Default = Template.bind({});
Default.args = {} as CommonToggleProps;
