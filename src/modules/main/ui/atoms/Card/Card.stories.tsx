import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { Card, CardProps } from './Card';

export default {
  title: 'Example/Cards',
  component: Card,
  argTypes: {
    onClick: { action: 'clicked' },
  },
  parameters: {
    actions: {
      handles: ['mouseover', 'click'],
    },
  },
} as Meta;

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  children: <p>this is a card</p>,
};

export const WithBackgroundImage = Template.bind({});
WithBackgroundImage.args = {
  children: <p>this is a card</p>,
  image: 'https://www.w3schools.com/howto/img_avatar.png',
};
