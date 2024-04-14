import type { StorybookConfig } from "@storybook/nextjs";

import { join, dirname } from "path";

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}
const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)", "./tokens/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-links',
    '@storybook/addon-themes',
    '@chromatic-com/storybook',
    // '@storybook/addon-interactions',
    // getAbsolutePath("@storybook/addon-onboarding"),
    // getAbsolutePath("@storybook/addon-links"),
    // getAbsolutePath("@storybook/addon-essentials"),
    // getAbsolutePath("@storybook/addon-themes"),
    // getAbsolutePath("@chromatic-com/storybook"),
    // getAbsolutePath("@storybook/addon-interactions"),
    {
      name: '@storybook/addon-styling-webpack',
      options: {
        rules: [
          // Replaces existing CSS rules to support PostCSS
          {
            test: /\.css$/,
            use: [
              'style-loader',
              {
                loader: 'css-loader',
                options: { importLoaders: 1 }
              },
              {
                // Gets options from `postcss.config.js` in your project root
                loader: 'postcss-loader',
                options: { implementation: require.resolve('postcss') }
              }
            ],
          }
        ]
      }
    }
  ],
  framework: {
    // name: getAbsolutePath("@storybook/nextjs"),
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
