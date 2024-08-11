const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://mern-vercel-backend-1.onrender.com',
      changeOrigin: true,
    })
  );
};
