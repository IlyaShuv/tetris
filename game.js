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
	//pole.unshift([0,0,0,0,0,0,0,0,0,0]);
	var rand = Math.floor(Math.random()*10);
	for (var i=0; i<10; i++) {
		pole[0][i] = 0;
	}

		pole[0][rand] = 1;

		for (var i=0; i<20; i++) {
			if (pole[i][rand] == 0) {
				break;
			}
			else if ((i == 19) && (pole[i][rand] == 1)) {
				Show(pole);
				alert("Game over!");
				clearInterval(TimeId1);
				clearInterval(TimeId2);
				clearInterval(TimeId3);
				clearInterval(TimeId4);
			}
		}	
}

function Sdvig() {
	for (var i=18; i>=0; i--) {
		for (var j=0; j<10; j++) {
			if (pole[i][j] == 1) {
				if (pole[i+1][j] == 0) {
					pole[i+1][j] = 1;
					if (i != 0) {
					pole[i][j] = 0; }
				}
			}
		}
	}
	//pole.pop();
	//pole.unshift([0,0,0,0,0,0,0,0,0,0]);
	/*	for (var i=0; i<10; i++) { //Проверка заполнености поля
		if (pole[0][i] == 1) {
			alert("Game over!");
			clearInterval(TimeId1);
			clearInterval(TimeId2);
			clearInterval(TimeId3);
			clearInterval(TimeId4);
		}*/
}
