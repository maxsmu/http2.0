/**
 * Created with server.js
 * @Description:
 * @Author: muchaoyang
 * @Date: 2016-06-17 10:39 AM
 * To change this template use File | Settings | File Templates.
 */

const http2 = require('http2'),
	fs = require('fs');

const options = {
	key: fs.readFileSync('./cert.key'),
	cert: fs.readFileSync('./cert.crt')
};

http2.createServer(options, function(request, response) {
	response.end('Hello world!');
}).listen(8080);


