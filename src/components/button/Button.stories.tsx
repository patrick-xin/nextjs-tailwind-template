import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Button from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'buttons/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  variant: 'primary',
  children: 'primary button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  children: 'secondary button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  variant: 'primary',
  children: 'primary large button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  variant: 'primary',
  children: 'primary small button',
};
