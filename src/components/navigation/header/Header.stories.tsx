import { ComponentMeta, ComponentStory } from '@storybook/react';

import Header, { IHeader } from './Header';

export default {
  title: 'navigation/Header',
  component: Header,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Base = Template.bind({});
Base.args = {} as IHeader;
