const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');
const mime = require('mime');

const config = require('./config.json');

http.createServer((req, res) => {
    const urlObject = url.parse(req.url);
    const pathname = urlObject.path === '/' ? '/index.html' : urlObject.pathname;
    const file = path.join(`${__dirname}`, path.normalize(pathname.replace(/\.\./g, '')));
    fs.access(file, fs.R_OK, (err) => {
        if (err) errHandler(res, 404, '你访问的页面不存在。');
        else fs.stat(file, (err, stats) => {
            if (!stats.isFile()) errHandler(res, 403, '非法请求。');
            else {
                res.writeHead(200, {
                    'Content-Type': `${mime.lookup(file)};charset=utf-8`
                });
                fs.createReadStream(file).pipe(res);
            }
        });
    });
}).listen(config.port, config.hostname, () => {
    console.log(`Server running at http://${config.hostname}:${config.port}/`);
});

function errHandler(res, code, msg) {
    res.writeHead(code, {
        'Content-Length': Buffer.byteLength(msg),
        'Content-Type': 'text/plain;charset=utf-8'
    });
    res.end(msg);
}