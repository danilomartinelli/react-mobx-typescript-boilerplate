const webpack = require("webpack");
const ImageminPlugin = require("imagemin-webpack-plugin").default;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebappWebpackPlugin = require("webapp-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const NODE_ENV = process.env.NODE_ENV || "development";
const DEV_MODE = NODE_ENV !== "production";
const PORT = process.env.PORT || 3000;

const FAVICON_DIR = "./src/assets/favicon/favicon.png";

module.exports = {
  entry: ["./src/index.tsx"],
  mode: DEV_MODE ? "development" : "production",
  devtool: DEV_MODE ? "source-map" : "",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader",
            options: {
              configFile: DEV_MODE ? "tsconfig.json" : "tsconfig.deploy.json"
            }
          }
        ]
      },
      {
        test: /\.(css|sass)$/,
        use: [
          "style-loader",
          { loader: "css-loader", options: { importLoaders: 1 } },
          "sass-loader"
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {}
          }
        ]
      },
      {
        test: /\.(ttf|eot|woff)(\?v=[0-9].[0-9].[0-9])?$/,
        use: [
          {
            loader: "file-loader",
            options: {}
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".json"]
  },
  output: {
    path: __dirname + "/dist",
    publicPath: "/",
    filename: "bundle.[hash].js"
  },
  devServer: {
    contentBase: "./dist",
    compress: true,
    port: PORT,
    historyApiFallback: true,
    open: true
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(NODE_ENV),
      "process.env.PORT": JSON.stringify(PORT)
    }),
    new CopyWebpackPlugin([]),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html"
    }),
    ...(FAVICON_DIR ? [new WebappWebpackPlugin(FAVICON_DIR)] : []),
    new ImageminPlugin({
      disable: DEV_MODE,
      pngquant: {
        quality: "95-100"
      },
      test: /\.(jpe?g|png|gif|svg)$/i
    })
  ]
};
