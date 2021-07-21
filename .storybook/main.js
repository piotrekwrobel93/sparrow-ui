module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-docs",
    "@storybook/addon-actions",
    "@storybook/preset-create-react-app",
    "@storybook/addon-a11y",
    "@storybook/addon-knobs",
    "@storybook/addon-viewport",
  ],
};
