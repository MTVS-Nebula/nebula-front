const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/auth/login",
    createProxyMiddleware({
      target: "https://auth.mtvs-nebula.com/",
      changeOrigin: true,
    })
  );

  app.use(
    "/info",
    createProxyMiddleware({
      target: "https://auth.mtvs-nebula.com/",
      changeOrigin: true,
    })
  );

  app.use(
    "/duplication/username",
    createProxyMiddleware({
      target: "https://auth.mtvs-nebula.com/",
      changeOrigin: true,
    })
  );

  app.use(
    "/duplication/email",
    createProxyMiddleware({
      target: "https://auth.mtvs-nebula.com/",
      changeOrigin: true,
    })
  );

  app.use(
    "/auth/signup",
    createProxyMiddleware({
      target: "https://auth.mtvs-nebula.com/",
      changeOrigin: true,
    })
  );
};
