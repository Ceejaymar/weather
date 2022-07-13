import React from 'react';
import { Units } from 'pages/main/components/unit';

export default {
  title: 'pages/main/Units',
  component: Units,
  argTypes: {
    onClick: { action: 'clicked' },
  },
};

const Template = (args) => <Units {...args} />;

export const Default = Template.bind({});
