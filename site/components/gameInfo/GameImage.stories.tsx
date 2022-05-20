import { Meta, Story } from "@storybook/react/types-6-0";

import { GameImage, GameImageProps } from "./GameImage";

export default {
  component: GameImage,
  title: "TopImage",
} as Meta;

const Template: Story<GameImageProps> = (args) => <GameImage {...args} />;

export const Default = Template.bind({});
Default.args = {
  imageUrl: "https://cdn.akamai.steamstatic.com/steam/apps/865360/header.jpg?t=1652179790",
} as GameImageProps;
