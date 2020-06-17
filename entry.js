const path = require('path');

console.log(__dirname);

module.exports = {
  entry: {
    main: './index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  }
};
