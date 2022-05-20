import { Meta, Story } from "@storybook/react/types-6-0";

import { GameInfo, GameInfoProps } from "./GameInfo";

export default {
  component: GameInfo,
  title: "GameInfo",
} as Meta;

const Template: Story<GameInfoProps> = (args) => <GameInfo {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: "Ricochet",
  developer: ["Valve"],
  publisher: ["Valve"],
  releaseDate: "2000-10-31T15:00:00Z",
  imageUrl: "https://cdn.akamai.steamstatic.com/steam/apps/865360/header.jpg?t=1652179790",
} as GameInfoProps;
