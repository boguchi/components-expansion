import type { StorybookConfig } from "@storybook/vue3-vite";

const BASE_URL =
  process.env.STORYBOOK_BASE_URL ?? "/components-expansion/storybook/";

const config: StorybookConfig = {
  stories: ["../src/components/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [],
  framework: "@storybook/vue3-vite",
  core: {
    builder: "@storybook/builder-vite",
  },
  viteFinal: async (config) => {
    config.base = BASE_URL;
    return config;
  },
};
export default config;
