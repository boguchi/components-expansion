import type { StorybookConfig } from "@storybook/vue3-vite";

const config: StorybookConfig = {
  stories: ["../src/components/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [],
  framework: "@storybook/vue3-vite",
  core: {
    builder: "@storybook/builder-vite",
  },
  viteFinal: async (config) => {
    config.base = "/storybook/";
    return config;
  },
};
export default config;
