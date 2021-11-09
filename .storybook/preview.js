import React from 'react'
import { addDecorator } from '@storybook/react'
import { ThemeProvider, CSSReset } from '@chakra-ui/react'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

addDecorator((storyFn) => (
  <ThemeProvider>
    <CSSReset />
    {storyFn()}
  </ThemeProvider>
))
