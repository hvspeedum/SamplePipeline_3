const path = require('path');

module.exports = {
  // Entry point for your client-side JavaScript
  entry: './index.js',  // This is the main entry for your JavaScript (adjust as needed)

  // Output settings for the bundled file
  output: {
    filename: 'bundle.js',  // Name of the output bundled file
    path: path.resolve(__dirname, 'dist'),  // Output directory (dist/)


//added from gpt0 start:-
 // Other configurations...
    ignoreWarnings: [
        {
            module: /express/,
            message: /the request of a dependency is an expression/
        }
    ]
//added from gpt0 ends here


  },

  // Resolving extensions so we don't need to specify .js when importing modules
  resolve: {
    extensions: ['.js'],  // Resolve .js files automatically

//added from gpt0
fallback: {
        "zlib": require.resolve("browserify-zlib"),
        "querystring": require.resolve("querystring-es3"),
        "path": require.resolve("path-browserify"),
        "crypto": require.resolve("crypto-browserify"),
        "stream": require.resolve("stream-browserify"),
        "fs": false,
        "url": require.resolve("url/"),
        "buffer": require.resolve("buffer/"),
        "util": require.resolve("util/")
    }
},
plugins: [
    new webpack.ProvidePlugin({
        Buffer: ['buffer', 'Buffer'],
        process: 'process/browser'
    })
//added from gpt0 ends here.
  },

  // Configuration for how modules should be processed
  module: {
    rules: [
      {
        test: /\.js$/,  // Apply Babel loader to all .js files
        exclude: /node_modules/,  // Exclude node_modules from transpilation
        use: {
          loader: 'babel-loader',  // Use Babel to transpile JavaScript
        },
      },
    ],
  },

  // Optional: Enable source maps for easier debugging
  devtool: 'source-map',

  // Mode: Set to 'development' for easier debugging, 'production' for optimizations
  mode: 'development',  // Change to 'production' for minified code
};
