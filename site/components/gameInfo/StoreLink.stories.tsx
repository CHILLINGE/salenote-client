import { Meta, Story } from "@storybook/react/types-6-0";

import { StoreLink, StoreLinkProps } from "./StoreLink";

export default {
  title: "StoreLink",
  component: StoreLink,
} as Meta;

const Template: Story<StoreLinkProps> = (args) => <StoreLink {...args}></StoreLink>;

export const Default = Template.bind({});
Default.args = {
  storeLink: "https://store.steampowered.com/app/60",
} as StoreLinkProps;
