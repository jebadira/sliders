const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');
module.exports = {
  mode: "development", // "production" | "development" | "none"  // Chosen mode tells webpack to use its built-in optimizations accordingly.
  entry: "./index.js", // string | object | array  // defaults to './src'
  // Here the application starts executing
  // and webpack starts bundling
  output: {
    // options related to how webpack emits results
    path: path.resolve(__dirname, "dist"), // string
    // the target directory for all output files
    // must be an absolute path (use the Node.js path module)
    filename: "bundle.js", // string    // the filename template for entry chunks
   },
  module: {
    // configuration regarding modules
    rules: [
      // rules for modules (configure loaders, parser options, etc.)
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        // the loader which should be applied, it'll be resolved relative to the context
        // -loader suffix is no longer optional in webpack2 for clarity reasons
        // see webpack 1 upgrade guide
        options: {
          presets: ["es2015", "babel-preset-env", "babel-preset-react"]
        },
        // options for the loader
      },
    ],
    /* Advanced module configuration (click to show) */  },
  resolve: {
    // options for resolving module requests
    // (does not apply to resolving to loaders)
  },
  // source-map most detailed at the expense of build speed.
  context: __dirname, // string (absolute path!)
  devServer: {
    contentBase: path.join(__dirname, 'public'), // boolean | string | array, static file location
    historyApiFallback: true, // true for index.html upon 404, object for multiple paths
    hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
    https: false, // true for self-signed, object for cert authority
    // ...
  },
  plugins: [
      new HtmlWebpackPlugin({
          title : "test",
          template : "index.html",
          inject : true
      }),
      new webpack.HotModuleReplacementPlugin({

      })
    // ...
  ],
  // list of additional plugins
  /* Advanced configuration (click to show) */}