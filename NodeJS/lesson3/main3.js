var cp = require('child_process');
var child1 = cp.fork(__dirname + '/child1.js');
var child2 = cp.fork(__dirname + '/child2.js');
while(cp){
	consoler.log("runnin main");
}