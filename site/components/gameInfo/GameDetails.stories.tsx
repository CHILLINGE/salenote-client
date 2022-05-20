import { Meta, Story } from "@storybook/react/types-6-0";

import { GameDetails, GameDetailsProps } from "./GameDetails";

export default {
  component: GameDetails,
  title: "TopContents",
} as Meta;

const Template: Story<GameDetailsProps> = (args) => <GameDetails {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: "Ricochet",
  developer: ["Valve"],
  publisher: ["Valve"],
  releaseDate: "2000-10-31T15:00:00Z",
} as GameDetailsProps;
