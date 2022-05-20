import { Meta, Story } from "@storybook/react/types-6-0";

import { TopImage, TopImageProps } from "./topImage";

export default {
  component: TopImage,
  title: "TopImage",
} as Meta;

const Template: Story<TopImageProps> = (args) => <TopImage {...args} />;

export const Default = Template.bind({});
Default.args = {
  imageUrl: "https://cdn.akamai.steamstatic.com/steam/apps/865360/header.jpg?t=1652179790",
} as TopImageProps;
