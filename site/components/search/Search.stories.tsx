import { Meta, Story } from "@storybook/react/types-6-0";

import { Search, SearchProps } from "./Search";

export default {
  title: "search/Search",
  component: Search,
} as Meta;

const Template: Story<SearchProps> = (args) => {
  return <Search {...args} />;
};

export const Basic = Template.bind({});
Basic.args = {} as SearchProps;
