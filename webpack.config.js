const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  entry: './src/index.js',
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  devServer: {
    port: 3000,
    historyApiFallback: true,
  },
  resolve: {
    modules: [__dirname, 'src', 'node_modules'],
    extensions: ['*', '.js', '.jsx', '.tsx', '.ts', '...'],
    alias: {
      _components: path.resolve(__dirname, 'src/components/'),
      _modules: path.resolve(__dirname, 'src/modules/'),
      _UI: path.resolve(__dirname, 'src/UI/'),
      _store: path.resolve(__dirname, 'src/store/'),
      _styles: path.resolve(__dirname, 'src/styles/'),
      _i18n: path.resolve(__dirname, 'i18n/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: require.resolve('babel-loader'),
      },
      {
        test: /\.s[ac]ss|css$/i,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]__[local]___[hash:base64:5]',
              },
            },
          },
          { loader: 'sass-loader' },
        ],
      },
      {
        test: /\.png|svg|jpg|gif$/,
        use: ['file-loader'],
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    // new BundleAnalyzerPlugin(),
  ],
};
