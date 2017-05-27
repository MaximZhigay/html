;(function(){
	window.myUtils = {
		createGamePlace: function(id, n){
		var container = document.getElementById(id);
		var tbody = document.createElement('tbody');
		container.appendChild(tbody);
		var arrNum = [];
		for (var i = 1; i <=n*n; i++) {
			arrNum.push(i);
		}
		for (var i = 0; i < n; i++) {
			var tr = document.createElement('tr');
			for (var j = 0; j < n; j++) {
				var td = document.createElement('td');
				td.innerText = getRandomNum(arrNum);
				td.style = getRandomStyle();
				tr.appendChild(td);
			}
			tbody.appendChild(tr);
		}
	}
}

function rand(min, max){
	return Math.round(Math.random()*(max - min) + min);
}

function getRandomNum(arr2){
	return arr2.splice(rand(0,arr2.length-1),1);
}

function getRandomStyle(){
	return "font-size:" + rand(10,34) + "px; color:" + getRandColor() + ";";
}

function getRandColor(){
	return 'rgb('+ rand(0,255) + ', '+ rand(0,255) + ', ' + rand(0,255) + ')';
}

}());