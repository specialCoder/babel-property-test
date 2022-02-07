const path = require('path');
const { execSync } = require('child_process');

execSync('rm -rf dist/js')


module.exports = {
  target:'web',
  entry: {
    app:path.resolve(__dirname,'src','index.js'),
  },
  mode: 'development',
  devtool: 'inline-source-map',
  module:{
    rules:[
      {
        test: /\.(js|ts)x?$/,
        include:path.resolve(__dirname,'./src'),
        use: {
          loader: 'babel-loader',
        }
      }],
  },
  resolve:{
    alias:{
      'src': path.resolve(__dirname,'src'),
    },
    mainFiles:['index'],
    extensions: ['.tsx', '.ts', '.jsx', '.js',  '.json']
  },
  plugins:[

  ],
  output: {
    filename: 'js/[name].[chunkhash:5].js',
    chunkFilename: '[name].[chunkhash:8].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
};