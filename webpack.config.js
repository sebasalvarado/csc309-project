/* File that will convert all of our modules to ES5 using Babel
 * This approach was taken from an online tutorial that you can find it here:
 * https://scotch.io/tutorials/react-on-the-server-for-beginners-build-a-universal-react-and-node-app
 * We grant all the rights of author to their respective owner.
 */


 // webpack.config.js
 const webpack = require('webpack');
 const path = require('path');

 module.exports = {
   entry: path.join(__dirname, 'src', 'app-client.js'),
   output: {
     path: path.join(__dirname, 'src', 'static', 'js'),
     filename: 'bundle.js'
   },
   module: {
     loaders: [{
       test: path.join(__dirname, 'src'),
       loader: ['babel-loader'],
       query: {
         cacheDirectory: 'babel_cache',
         presets: ['react', 'es2015']
       }
     }]
   },
   plugins: [
     new webpack.DefinePlugin({
       'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
     }),
     new webpack.optimize.DedupePlugin(),
     new webpack.optimize.OccurenceOrderPlugin(),
     new webpack.optimize.UglifyJsPlugin({
       compress: { warnings: false },
       mangle: true,
       sourcemap: false,
       beautify: false,
       dead_code: true
     })
   ]
 };
