import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Checkbox } from '../src';

export default {
  title: 'COMPONENT/Checkbox',
  component: Checkbox,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args: undefined) => <Checkbox {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  name: 'checked',
  label: 'Check Me!',
};
