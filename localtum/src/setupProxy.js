const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/localtum',
    createProxyMiddleware({
      target: 'https://15.165.139.216.nip.io',
      changeOrigin: true,
      secure: false, // HTTPS를 사용하는 경우 필요할 수 있음
    })
  );
};
