import { Meta, Story } from "@storybook/react/types-6-0";

import { SearchResultItem, SearchResultItemProps } from "../components/search/SearchResultItem";

export default {
  title: "SearchResultItem",
  component: SearchResultItem,
} as Meta;

const Template: Story<SearchResultItemProps> = (args) => {
  return <SearchResultItem {...args} />;
};

export const Basic = Template.bind({});
Basic.args = {
  title: "Hello game world!",
  price: {
    discount: 0,
    final: "50000원",
    initial: "50000원",
  },
} as SearchResultItemProps;

export const Discount = Template.bind({});
Discount.args = {
  title: "Hello game world!",
  price: {
    discount: 50,
    final: "25000원",
    initial: "50000원",
  },
} as SearchResultItemProps;
