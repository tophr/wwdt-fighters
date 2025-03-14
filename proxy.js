const express = require('express');
// const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require('cors');

const app = express();

// Enable CORS
app.use(cors());

// app.use('/api', createProxyMiddleware({
//     target: 'https://api.wwdt.me',
//     changeOrigin: true,
//     pathRewrite: {
//         '^/api': '', // remove /api prefix
//     },
//     onProxyReq: (proxyReq, req, res) => {
//         console.log('Proxying request:', req.method, req.url);
//     },
//     onProxyRes: (proxyRes, req, res) => {
//         console.log('Received response:', proxyRes.statusCode, req.url);
//     },
//     onError: (err, req, res) => {
//         console.error('Proxy error:', err);
//         res.status(500).send('Proxy error');
//     }
// }));

app.get('/api', (req, res) => {
    fetch('https://api.wwdt.me/v2.0/panelists')
        .then((response) => response.json())
        .then((json) => res.json(json))
        .catch((error) => {
            console.log(error);
            res.status(500);
            res.json({error});
        });
    // res.send('sanity check');
});

app.listen(3000, () => {
    console.log('Proxy server is running on http://localhost:3000');
});