import React from 'react';
import { Navbar } from 'common/nav';

export default {
  title: 'common/Nav',
  component: Navbar,
  argTypes: {},
};

const Template = (args) => <Navbar {...args} />;

export const Default = Template.bind({});

Default.args = {};
