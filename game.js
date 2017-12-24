function Init() {
	var pole = new Array();
	for (var i=0; i<20; i++) {
		pole[i] = new Array(0,0,0,0,0,0,0,0,0,0);
	}
	return pole;
}

function Show() {
	document.body.innerHTML = '';
	for (var i=0; i<20; i++) {
		var content = document.body.innerHTML;
		document.body.innerHTML = content + "<br>";
		for (var j=0; j<10; j++) {
		content = document.body.innerHTML;
		document.body.innerHTML = content + pole[i][j];
		}
	}
	content = document.body.innerHTML;
	document.body.innerHTML = "<div class = main_pole>" + content + "</div>";
}

function Destroy() {
	for (var i=0; i<10; i++) {
		if (pole[19][i] == 0) break
		else if ((pole[19][i] == 1) && (i == 9)) {
			pole.pop();
			pole.unshift([0,0,0,0,0,0,0,0,0,0]);
		}
	}
}

function Add() {
	pole.pop();
	pole.unshift([0,0,0,0,0,0,0,0,0,0]);
	var one = Math.floor(Math.random()*10);
	for (var i=0; i<10; i++) {
		pole[0][i] = 0;
	}
		pole[0][one] = 1;
}

function Sdvig() {
	pole.pop();
	pole.unshift([0,0,0,0,0,0,0,0,0,0]);
}