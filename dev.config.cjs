/** @type {import('webpack-dev-server').Configuration} */
module.exports = {
  client: {
      logging: 'none',
      overlay: false,
  },
  headers: { 'Access-Control-Allow-Origin': '*' },
  historyApiFallback: { disableDotRule: true },
  allowedHosts: 'all',
  host: '0.0.0.0',
}