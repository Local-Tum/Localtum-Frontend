const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://15.165.139.216.nip.io",
      changeOrigin: true,
      secure: false,
      pathRewrite: {
        "^/api": "/localtum",
      },
    })
  );
};
