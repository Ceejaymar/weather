import React from 'react';
import { MainCard } from 'pages/main/components/mainCard';

export default {
  title: 'pages/main/MainCard',
  component: MainCard,
  argTypes: {},
};

const Template = (args) => <MainCard {...args} />;

export const Default = Template.bind({});
