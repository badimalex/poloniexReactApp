const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const paths = {
  DIST: path.resolve(__dirname, 'dist'),
  SRC: path.resolve(__dirname, 'dist'),
  JS: path.resolve(__dirname, 'src'),
};

module.exports = {
  entry: './src/index.js',
  output: {
    path: paths.DIST,
    filename: 'bundle.js',
  },
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'static'
    }),
    new UglifyJSPlugin({ sourceMap: true }),
    new ExtractTextPlugin({
      allChunks: true,
      filename: 'styles.css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        }),
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
