process.stdin.setEncoding('utf8');
process.stdin.resume();
process.stdin.on('data', function(chunk) {
	console.log(chunk.length);
	if (chunk !== "end\n") {
		process.stdout.write('data: ' + chunk);
	} else {
		process.kill(process.pid);
}});