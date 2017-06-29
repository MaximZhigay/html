var http = require("http");
var fs = require('fs');
var url = require("url");

http.createServer(function onRequest(request, response) {
var postData = "";
var pathname = url.parse(request.url).path;
if(pathname == '/')
pathname = '/index.html';
//        чтобы убрать начальный слэш
pathname = pathname.substring(1, pathname.length);
fs.readFile (pathname, 'utf8', function (err, data) {
if (err) {
console.log(  'Could not find or open file'  +pathname 
+' for reading\n ');
else {
response.writeHead(200, {'Content-Type': 'text/html'});
response.end(data);
}
)}
}).listen(8080);