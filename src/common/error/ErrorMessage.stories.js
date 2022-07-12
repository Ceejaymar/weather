import { ErrorMessage } from 'common/error';

export default {
  title: 'common/ErrorMessage',
  component: ErrorMessage,
  argTypes: {
    children: {
      defaultValue: 'Try again',
    },
  },
};

// eslint-disable-next-line react/react-in-jsx-scope
const Template = (args) => <ErrorMessage {...args} />;

export const Default = Template.bind({});

Default.args = {};
