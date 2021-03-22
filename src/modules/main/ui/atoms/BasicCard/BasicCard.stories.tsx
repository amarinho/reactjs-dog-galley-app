import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { BasicCard, BasicCardProps } from './BasicCard';

export default {
    title: 'Example/BasicCard',
    component: BasicCard,
    argTypes: {
        onClick: { action: 'clicked' },
    },
    parameters: {
        actions: {
            handles: ['mouseover', 'click'],
        },
    },
} as Meta;

const Template: Story<BasicCardProps> = (args) => <BasicCard {...args} />;

export const Basic = Template.bind({});
Basic.args = {
    label: "this is a card",
};

export const WithBackgroundImage = Template.bind({});
WithBackgroundImage.args = {
    label: "this is a card",
    image: 'https://www.w3schools.com/howto/img_avatar.png',
};
