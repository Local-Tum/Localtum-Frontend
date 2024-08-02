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
      onProxyReq: (proxyReq, req, res) => {
        proxyReq.setHeader("Origin", "http://15.165.139.216.nip.io");
      },
      onProxyRes: (proxyRes, req, res) => {
        res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
        res.setHeader(
          "Access-Control-Allow-Methods",
          "GET, POST, PUT, DELETE, OPTIONS"
        );
        res.setHeader(
          "Access-Control-Allow-Headers",
          "Content-Type, Authorization"
        );
        res.setHeader("Access-Control-Allow-Credentials", "true");
      },
    })
  );
};
