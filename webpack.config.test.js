
module.exports = {
  mode: 'development',
  resolve: {
    extensions: ['.ts'],
    modules: ['./src']
  },
  module: {
    rules: [
      { 
        test: /\.ts$/, 
        use: {
          loader: 'ts-loader'
        } 
      }
    ]
  }
}