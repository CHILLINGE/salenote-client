import { Meta, Story } from "@storybook/react/types-6-0";

import { PriceInfo, PriceInfoProps } from "../components/saleInfo/priceInfo";

export default {
  title: "PriceInfo",
  component: PriceInfo,
} as Meta;

const Template: Story<PriceInfoProps> = (args) => {
  return <PriceInfo {...args} />;
};

export const Basic = Template.bind({});
Basic.args = {
  originPrice: 33000,
  salePrice: 7350,
  salePercentage: 67,
} as PriceInfoProps;
