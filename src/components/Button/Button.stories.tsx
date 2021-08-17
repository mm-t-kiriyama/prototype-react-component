import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

export default {
  title: 'COMPONENT/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args: undefined) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'ご登録はこちら',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'ご登録はこちら',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'ご登録はこちら',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'ご登録はこちら',
};

export const Disable = Template.bind({});
Disable.args = {
  disable: true,
  label: "ご登録はこちら",
};
