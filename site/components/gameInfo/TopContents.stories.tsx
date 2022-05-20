import { Meta, Story } from "@storybook/react/types-6-0";

import { TopContents, TopContentsProps } from "./topContents";

export default {
  component: TopContents,
  title: "TopContents",
} as Meta;

const Template: Story<TopContentsProps> = (args) => <TopContents {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: "Ricochet",
  developer: ["Valve"],
  publisher: ["Valve"],
  releaseDate: "2000-10-31T15:00:00Z",
} as TopContentsProps;
