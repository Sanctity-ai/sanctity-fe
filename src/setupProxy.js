const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    '/wp-json/wp/v2',
    createProxyMiddleware({
      target: 'https://sanctity.ai',
      changeOrigin: true,
    }),
  )
}
