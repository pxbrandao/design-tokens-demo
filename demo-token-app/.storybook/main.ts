import type { StorybookConfig } from "@storybook/nextjs-vite"

const config: StorybookConfig = {
  stories: [
    "../components/**/*.stories.@(js|jsx|ts|tsx|mjs)",
    "../app/**/*.stories.@(js|jsx|ts|tsx|mjs)", // optional if you plan stories in app/
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx|mjs)",
  ],
  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest",
  ],
  framework: {
    name: "@storybook/nextjs-vite",
    options: {},
  },
  staticDirs: ["../public"],
}
export default config
