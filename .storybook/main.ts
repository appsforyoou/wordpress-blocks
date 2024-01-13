import type { StorybookConfig } from '@storybook/react-webpack5';

const mainConfig: StorybookConfig = {
  stories: ["../src/**/*.stories.tsx"],
  core: {
    builder: "@storybook/builder-webpack5"
  },

  // Add any Storybook addons you want here: https://storybook.js.org/addons/
  addons: [
    "@storybook/addon-essentials",
    {
      name: "@storybook/addon-styling-webpack",
      options: {
        rules: [
          // Replaces existing CSS rules to support PostCSS
          {
            test: /\.css$/,
            sideEffects: true,
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
    name: "@storybook/react-webpack5",
    options: {}
  },

  // webpackFinal: async (config) => {
  //   config.module.rules.push({
  //     test: /\.(ts|tsx)$/,
  //     exclude: /node_modules/,
  //     use: {
  //       loader: "babel-loader",
  //       options: {
  //         presets: [["react-app", { flow: false, typescript: true, runtime: "automatic", importSource: "react" }]]
  //       }
  //     }
  //   });
  //   config.resolve.extensions.push(".ts", ".tsx");

  //   return config;
  // },

  docs: {
    autodocs: true
  }
};
export default mainConfig;
