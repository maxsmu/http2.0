/**
 * Created with http2.js
 * @Description:
 * @Author: muchaoyang
 * @Date: 2016-06-22 5:58 PM
 * To change this template use File | Settings | File Templates.
 */

const http2 = require('http2'),
	fs = require('fs'),
	options = {
		key: fs.readFileSync('./example.com.key'),
		cert: fs.readFileSync('./example.com.crt')
	},
	PORT = 8080;

http2.createServer(options, (request, response)=> {
	response.setHeader("Access-Control-Allow-Origin", "*");
	response.setHeader("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
	response.setHeader("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	response.setHeader("X-Powered-By", ' 3.2.1');
	const url = request.url;
	if (url === '/') {
		response.end('Welcome  HTTP2.0!');
	} else if (url === '/http2') {
		setTimeout(()=>response.end('http2 success'), 300);
	}
}).listen(PORT, ()=> {
	console.log('Listening to port' + PORT);
});