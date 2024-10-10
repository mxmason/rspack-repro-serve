const path = require('node:path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const devServerConfig = require('./dev.config.cjs');

const isRunningWebpack = !!process.env.WEBPACK;
const isRunningRspack = !!process.env.RSPACK;
if (!isRunningRspack && !isRunningWebpack) {
  throw new Error('Unknown bundler');
}

/**
 * @type {import('webpack').Configuration | import('@rspack/cli').Configuration}
 */
const homeConfig = {
  devServer: devServerConfig,
  mode: 'development',
  devtool: false,
  entry: {
    home: './src/index.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './index.html',
      title: 'Home',
    }),
  ],
  output: {
    clean: true,
    path: isRunningWebpack
      ? path.resolve(__dirname, 'webpack-dist/home')
      : path.resolve(__dirname, 'rspack-dist/home'),
    filename: '[name].js',
  },
  experiments: {
    css: true,
  },
};

const aboutConfig = {
  devServer: devServerConfig,
  mode: 'development',
  devtool: false,
  entry: {
    about: './src/about.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'about.html',
      template: './index.html',
      title: 'About',
    }),
  ],
  output: {
    clean: true,
    path: isRunningWebpack
      ? path.resolve(__dirname, 'webpack-dist/about')
      : path.resolve(__dirname, 'rspack-dist/about'),
    filename: '[name].js',
  },
  experiments: {
    css: true,
  },
};

module.exports = [homeConfig, aboutConfig];
