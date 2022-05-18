import { Meta, Story } from "@storybook/react/types-6-0";

import { SearchTextInput, SearchTextInputProps } from "../components/search/SearchTextInput";

export default {
  title: "SearchTextInput",
  component: SearchTextInput,
} as Meta;

const Template: Story<SearchTextInputProps> = (args) => {
  return <SearchTextInput {...args} />;
};

export const Basic = Template.bind({});
Basic.args = {
  placeholder: "어떤 게임의 할인정보를 찾고 계세요?",
} as SearchTextInputProps;
