import { Meta, Story } from "@storybook/react/types-6-0";
import { TestButton, TestButtonProps } from "../components/Test";

export default {
  title: "testbtn",
  component: TestButton,
} as Meta;

const Template: Story<TestButtonProps> = (args) => {
  return <TestButton {...args} />;
};

export const Login = Template.bind({});
Login.args = {
  children: "로그인",
} as TestButtonProps;
