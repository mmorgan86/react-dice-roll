module.exports = {
  entry: {
    app: "./app/javascript/"
  },
  output:  {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: [".webpack.js", ".web.js", ".js", ".json", ".css"],
    modules: [
      './node_modules',
      './app'
    ]
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.css/,
        use: [
          { loader: 'style-loader'},
          { loader: 'css-loader'}
        ]
      }
    ]
  }
}