import { ThemeProvider } from "@material-ui/core/styles";
import { DocsContainer } from "@storybook/addon-docs/blocks";
import { addParameters } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { CssBaseline } from "@material-ui/core";
import React from "react";
import theme from "../src/theme";
import { StylesProvider } from "@material-ui/core/styles";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

const withThemeProvider = (Story, context) => {
  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Story {...context} />
      </ThemeProvider>
    </StylesProvider>
  );
};

addParameters({
  docs: {
    container: ({ children, context }) => (
      <DocsContainer context={context}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </DocsContainer>
    ),
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
});

export const decorators = [withThemeProvider];
