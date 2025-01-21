const path = require('path');

module.exports = {
  // Entry point for your application (main JS file)
  entry: './src/index.js',  // Modify this based on your actual entry point

  // Output settings for the bundled file
  output: {
    filename: 'bundle.js',  // The name of the output bundle file
    path: path.resolve(__dirname, 'dist'),  // Output directory (dist/)
  },

  // Configuration for how modules (JS files) should be transformed
  module: {
    rules: [
      {
        test: /\.js$/,  // This rule applies to all .js files
        exclude: /node_modules/,  // Don't transpile files in node_modules
        use: 'babel-loader',  // Use Babel to transpile JS files
      },
    ],
  },

  // Resolve ES6+ imports and extensions
  resolve: {
    extensions: ['.js'],  // Resolve .js files automatically
  },

  // Optional: Configuration for development mode or production
  mode: 'development',  // Can be 'production' or 'development'
};
