var http = require('http');
var url = require('url');

function serve(request, response){
	var _get = url.parse(request.url, true).query;
	process.send(_get);
	process.exit(0);
}

http.createServer(serve).listen(8080);