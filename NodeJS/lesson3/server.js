var http = require('http');
var fs = require('fs');

var lang = process.env["LANG"];

function serve(request, response){
	var filename;
	if(lang === "ru_RU"){
		filename = "ru.html";
	} else {
		filename = "en.html";
	}
	fs.readFile('./' + filename, (err, data) => {
		if (err) throw err;
		response.writeHeader(200, {'Context-Type':"text/html"})
		response.end(data);
	});
}

http.createServer(serve).listen(8080);