var cp = require('child_process');

var child = cp.fork(__dirname + "/door.js");

child.on('message', function(data){
	console.log("Parent")
	console.log(data)
});