import React from 'react';
import { Input } from 'common/input';

export default {
  title: 'common/Input',
  component: Input,
  argTypes: {
    setValue: { action: 'key entered' },
    placeholder: { defaultValue: 'Enter a city or zipcode', control: 'text' },
  },
};

const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});

Default.args = {};
