const EventEmitter = require('events').EventEmitter;
const eventEmitter = new EventEmitter();
eventEmitter.on('randomStrong', function (randomStr){
	console.log('Received the string: ' + randomStr)
});
eventEmitter.emit('randomString', randomString());
function randomString () {
	const stringsArr = ['NodeJs', 'coligo.io', 'JavaScript', 'EventEmitters']
	return stringsArr[Math.floor(Math.random() * stringsArr.length)]
};