const Path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    app: Path.resolve(__dirname, "../src/scripts/index.js")
  },
  output: {
    path: Path.join(__dirname, "../build"),
    filename: "js/[name].js"
  },
  optimization: {
    splitChunks: {
      chunks: "all",
      name: false
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([
      { from: Path.resolve(__dirname, "../static"), to: "static" }
    ]),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: Path.resolve(__dirname, "../src/index.html")
    }),
    new HtmlWebpackPlugin({
      filename: "promocii.html",
      template: Path.resolve(__dirname, "../src/promocii.html")
    }),
    new HtmlWebpackPlugin({
      filename: "apteki.html",
      template: Path.resolve(__dirname, "../src/apteki.html")
    }),
    new HtmlWebpackPlugin({
      filename: "kariera.html",
      template: Path.resolve(__dirname, "../src/kariera.html")
    }),
    new HtmlWebpackPlugin({
      filename: "spisanie.html",
      template: Path.resolve(__dirname, "../src/spisanie.html")
    }),
    new HtmlWebpackPlugin({
      filename: "livsane.html",
      template: Path.resolve(__dirname, "../src/livsane.html")
    }),
    new HtmlWebpackPlugin({
      filename: "soveti.html",
      template: Path.resolve(__dirname, "../src/soveti.html")
    }),
    new HtmlWebpackPlugin({
      filename: "horoskop.html",
      template: Path.resolve(__dirname, "../src/horoskop.html")
    }),
    new HtmlWebpackPlugin({
      filename: "zabava.html",
      template: Path.resolve(__dirname, "../src/zabava.html")
    }),
    new HtmlWebpackPlugin({
      filename: "spisanie.html",
      template: Path.resolve(__dirname, "../src/spisanie.html")
    })
  ],
  resolve: {
    alias: {
      "~": Path.resolve(__dirname, "../src")
    }
  },
  module: {
    rules: [
      {
        test: /\.(html)$/,
        use: {
          loader: "html-loader",
          options: {
            interpolate: true,
            attrs: [":data-src"]
          }
        }
      },
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: "javascript/auto"
      },
      {
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[path][name].[ext]"
          }
        }
      }
    ]
  }
};
