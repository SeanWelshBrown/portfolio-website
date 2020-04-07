const path = require('path');
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // the app entry point is /src/index.js
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
  	// the output of the webpack build will be in /dist directory
    path: path.resolve(__dirname, 'dist'),
    // the filename of the JS bundle will be bundle.js
    filename: 'bundle.js'
  },
  resolve: {
    modules: [
			'node_modules',
			path.resolve(__dirname)
		],
		extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
      	// for any file with a suffix of js or jsx
        test: /\.jsx?$/,
        // ignore transpiling JavaScript from node_modules as it should be that state
        exclude: /node_modules/,
        // use the babel-loader for transpiling JavaScript to a suitable format
        loader: 'babel-loader',
        options: {
          // attach the presets to the loader (most projects use .babelrc file instead)
          presets: ["@babel/preset-env", "@babel/preset-react"]
        }
      },
      {
        // css modules
        test: /\.css$/i,
        use: [
            ExtractCssChunks.loader,
            {
                loader: 'css-loader',
                options: {
                    modules: true,
                    localIdentName: '[local]--[hash:base64:5]'
                }
            }
        ]
    },
    {
      test: /\.(png|jpe?g|gif|pdf)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]'
          }
        }
      ]
    }]
  },
  // add a custom index.html as the template
  plugins: [
      new HtmlWebpackPlugin({ 
          template: path.resolve(__dirname, 'src', 'index.html') 
      }),
      new ExtractCssChunks({
        filename: '[name].css'
      })
      
      ]
};