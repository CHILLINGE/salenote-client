import { Meta, Story } from "@storybook/react/types-6-0";

import { SearchResultList, SearchResultListProps } from "./SearchResultList";

export default {
  title: "search/SearchResultList",
  component: SearchResultList,
} as Meta;

const Template: Story<SearchResultListProps> = (args) => {
  return <SearchResultList {...args} />;
};

export const Basic = Template.bind({});
Basic.args = {} as SearchResultListProps;
