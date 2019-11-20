const path = require('path');

module.exports = [{
  // string
  entry: `${__dirname}/client/src/index.jsx`,
  output: {
    path: path.join(__dirname,'client/public'),
    filename: 'bundle.js',
  },
  module: {
    rules : [
      {
        test: [/\.jsx$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-react',
            '@babel/preset-env',
          ]
        },
      },
      {
        test: [/\.css$/],
        use: [
          'style-loader',
          'css-loader',
        ]
      },
    ],
  },
}];