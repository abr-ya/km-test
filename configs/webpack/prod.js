// production config
const { merge } = require("webpack-merge");
const { resolve } = require("path");
const CopyPlugin = require("copy-webpack-plugin");

const commonConfig = require("./common");

module.exports = merge(commonConfig, {
  mode: "production",
  entry: "./index.tsx",
  output: {
    filename: "js/bundle.[contenthash].min.js",
    path: resolve(__dirname, "../../dist"),
    publicPath: "/",
  },
  devtool: "source-map",
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "public", to: "./" },
      ],
    }),
  ],
});
