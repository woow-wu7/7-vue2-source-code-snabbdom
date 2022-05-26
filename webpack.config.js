const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",

  entry: {
    index: path.resolve(__dirname, "src/index.js"),
  },

  output: {
    path: path.resolve(__dirname, "build"),
  },

  devServer: {
    static: {
      directory: path.join(__dirname, "build"),
    },
    compress: true,
    port: 9000,
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "7-vue2-source-code-snabbdom",
      template: "public/index.html",
      filename: "index.html",
    }),
  ],
};
