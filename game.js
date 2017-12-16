function Init() {
	var pole = new Array();
	for (var i=0; i<20; i++) {
		pole[i] = new Array(0,0,0,0,0,0,0,0,0,0);
	}
	return pole;
}

function Show(pole) {
	document.body.innerHTML = '';
	for (var i=0; i<20; i++) {
		document.write("<br>")
		for (var j=0; j<10; j++) {
			document.write(pole[i][j]);
		}
	}
}

function Destroy(pole) {
	for (var i=0; i<10; i++) {
		if (pole[19][i] == 0) break
		else if ((pole[19][i] == 1) && (i == 9)) {
			pole.pop();
			pole.unshift([0,0,0,0,0,0,0,0,0,0]);
		}
	}
}

function Sdvig(pole) {
	pole.pop();
	pole.unshift([0,0,0,0,0,0,0,0,0,0]);
	for (var i=0; i<10; i++) {
		pole[0][i] = Math.round(Math.random());
	}
}