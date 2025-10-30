import type { Preview } from '@storybook/react';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../src/tokens/theme';

const preview: Preview = {
  decorators: [
    (Story) => React.createElement(
      ThemeProvider,
      { theme: lightTheme },
      React.createElement(Story)
    ),
  ],
};

export default preview;


