import React from 'react';
import { Button } from 'common/button';

export default {
  title: 'common/Button',
  component: Button,
  argTypes: {
    children: {
      defaultValue: 'button',
    },
    onClick: { action: 'clicked' },
  },
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
