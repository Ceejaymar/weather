import React from 'react';
import { Loading } from 'common/loading';

export default {
  title: 'common/Loading',
  component: Loading,
  argTypes: {},
};

const Template = (args) => <Loading {...args} />;

export const Default = Template.bind({});

Default.args = {};
