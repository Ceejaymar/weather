import { GlobalStyles } from 'GlobalStyles';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const withGlobalStyles = (Story, context) => {
  return (
    <div>
      <GlobalStyles />
      <Story {...context} />
    </div>
  );
};

export const decorators = [withGlobalStyles];
