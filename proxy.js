const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use('/api', createProxyMiddleware({
    target: 'https://api.wwdt.me',
    changeOrigin: true,
    pathRewrite: {
        '^/api': '', // remove /api prefix
    },
}));

app.listen(3000, () => {
    console.log('Proxy server is running on http://localhost:3000');
});