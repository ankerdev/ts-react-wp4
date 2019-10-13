const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const devMode = process.argv.some(arg => arg.includes('development'));
const srcDir = './src';
const scssModule = /\.(component|module|view)\.scss$/;

const cssLoaderArray = (modules = false) => [
  devMode
    ? 'style-loader'
    : MiniCssExtractPlugin.loader,
  {
    loader: 'css-loader',
    options: {
      importLoaders: 2,
      ...(modules
        ? {
          modules: {
            localIdentName: '[local]_[hash:base64:8]',
          },
        } : {}
      ),
    }
  },
  'postcss-loader',
  'sass-loader',
];

module.exports = {
  devServer: {
    contentBase: '/',
    historyApiFallback: true,
    inline: true,
    port: 2222,
  },
  devtool: 'source-map',
  entry: {
    index: `${srcDir}/index.tsx`,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
      },
      {
        test: /\.ts$/,
        enforce: 'pre',
        loader: 'tslint-loader',
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      },
      {
        test: /\.scss$/,
        exclude: scssModule,
        use: cssLoaderArray(),
      },
      {
        test: scssModule,
        exclude: /node_modules/,
        use: cssLoaderArray(true),
      },
      {
        test: /\.(png|jpg|gif|woff2?|ttf|eot)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/[name].[hash:12].[ext]',
            },
          },
        ],
      },
      {
        test: /\.svg$/i,
        rules: [
          {
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: 'assets/[name].[hash:12].[ext]',
                },
              },
            ],
            issuer: /\.scss$/i,
          },
          {
            use: ['raw-loader'],
            issuer: /\.(tsx?|html)$/i,
          },
        ],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: true,
              interpolate: true,
            },
          },
        ],
      },
    ],
  },
  output: {
    filename: 'bundle.[hash:12].js',
    path: path.resolve(__dirname, './dist'),
  },
  plugins: [
    new CleanWebpackPlugin(),
    new Dotenv(),
    new HTMLWebpackPlugin({
      filename: 'index.html',
      inject: 'body',
      template: `${srcDir}/index.html`,
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[hash:12].css',
    }),
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
};
