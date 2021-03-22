import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { ImageGallery, ImageGalleryProps } from './ImageGallery';

export default {
  title: 'Example/ImageGallery',
  component: ImageGallery,
  argTypes: {
    onClick: { action: 'clicked' },
  },
  parameters: {
    actions: {
      handles: ['mouseover', 'click'],
    },
  },
} as Meta;

const Template: Story<ImageGalleryProps> = (args) => <ImageGallery {...args} />;

export const WithBackgroundImage = Template.bind({});
WithBackgroundImage.args = {
  images: ['https://www.w3schools.com/howto/img_avatar.png', 'https://www.w3schools.com/howto/img_avatar.png'],
};
