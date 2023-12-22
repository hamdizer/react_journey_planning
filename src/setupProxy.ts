const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app:any) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://mvvvip1.defas-fgi.de/mvv/', 
      changeOrigin: true,
    })
  );
};