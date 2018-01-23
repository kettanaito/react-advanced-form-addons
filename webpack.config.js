const path = require('path');
const webpack = require('webpack');
const BabelMinifyPlugin = require('babel-minify-webpack-plugin');
const packageJson = require('./package.json');

/* Environment */
const DEVELOPMENT = (process.env.NODE_ENV === 'development');
const PRODUCTION = (process.env.NODE_ENV === 'production');

module.exports = {
  entry: path.resolve(__dirname, packageJson.module),
  externals: {
    react: 'umd react',
    immutable: 'umd immutable',
    'react-advanced-form': 'umd reactAdvancedForm'
  },
  output: {
    path: __dirname,
    filename: packageJson.main,
    library: 'reactAdvancedFormAddons',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    PRODUCTION && new BabelMinifyPlugin({
      removeConsole: true,
      mangle: {
        topLevel: true,
        keepFnName: true
      }
    }),
    new webpack.NoEmitOnErrorsPlugin()
  ].filter(Boolean),
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: DEVELOPMENT,
              presets: [
                ['env', {
                  modules: DEVELOPMENT && 'commonjs',
                  targets: {
                    browsers: 'last 2 versions'
                  }
                }],
                'react'
              ],
              plugins: [
                'transform-export-extensions',
                'transform-class-properties',
                'transform-object-rest-spread'
              ]
            }
          },
          {
            loader: 'eslint-loader'
          }
        ]
      }
    ]
  },
  devtool: DEVELOPMENT && 'source-map',
  resolve: {
    extensions: ['.jsx', '.js']
  }
};
