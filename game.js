function Init() {
	var pole = new Array();
	for (var i=0; i<20; i++) {
		pole[i] = new Array(i,0,0,0,0,0,0,0,0,0);
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
	for (var i=0; i<10; i++) {
		pole[0][i] = Math.round(Math.random());
	}
}

function Sdvig() {
	pole.pop();
	pole.unshift([0,0,0,0,0,0,0,0,0,0]);
}