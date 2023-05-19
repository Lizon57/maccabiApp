module.exports = {
  "stories": ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  "addons": ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions", "@storybook/preset-create-react-app", "@storybook/addon-mdx-gfm", '@storybook/addon-interactions', '@storybook/addon-a11y', '@storybook/addon-storysource', '@storybook/addon-controls', '@storybook/addon-viewport'],
  "framework": {
    name: "@storybook/react-webpack5",
    options: {}
  }
};