import path from "path";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

export default ({
  stories: ["../src/**/*.stories.tsx"],

  // Add any Storybook addons you want here: https://storybook.js.org/addons/
  addons: [],

  framework: {
    name: "@storybook/react-webpack5",
    options: {}
  },

  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.css$/,
      use: [
        {
          loader: 'postcss-loader',
          options: {
            ident: 'postcss',
            plugins: [
              tailwindcss,
              autoprefixer
            ]
          }
        }
      ],
      include: path.resolve(__dirname, '../src'),
    })

    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
        options: {
          presets: [["react-app", { flow: false, typescript: true, runtime: "automatic", importSource: "react" }]]
        }
      }
    });
    config.resolve.extensions.push(".ts", ".tsx");

    return config;
  },

  docs: {
    autodocs: true
  }
});