module.exports = require('./webpack.config-helper')({
  isProduction: false,
  devtool: 'cheap-eval-source-map',
  inline: true,
  host: '0.0.0.0',
  port: 8080
})
