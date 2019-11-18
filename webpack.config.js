const path = require('path');

module.exports = [{
  // string
  entry: `${__dirname}/client/src/omdex.js`,
  output: {
    path: path.join(__dirname,'client/public');
    filename: 'bundle.js',
  },
  module: {
    rules : [
      {
        test: [/\.jsx$/],
        exclue: /node_modules/,
        loader: 'babel-loader',
        options: {
          presset: [
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