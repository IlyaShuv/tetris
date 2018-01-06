function Init() {
	var pole = new Array();
	for (var i=0; i<lines; i++) {
		pole[i] = new Array(0,0,0,0,0,0,0,0,0,0);
	}
	return pole;
}

function Show() {
	document.body.innerHTML = '';
	for (var i=0; i<lines; i++) {
		var content = document.body.innerHTML;
		document.body.innerHTML = content + "<br>";
		for (var j=0; j<10; j++) {
			content = document.body.innerHTML;
			if (pole[i][j] == 0) {
				document.body.innerHTML = content + "<div id = 'cell_0'></div>";
			} else if (pole[i][j] == 1) {
				document.body.innerHTML = content + "<div id = 'cell_1'></div>";
			} else if (pole[i][j] == 2) {
				document.body.innerHTML = content + "<div id = 'cell_2'></div>";
			} else if (pole[i][j] == 3) {
				document.body.innerHTML = content + "<div id = 'cell_3'></div>";
			} else if (pole[i][j] == 4) {
				document.body.innerHTML = content + "<div id = 'cell_4'></div>";
			} else if (pole[i][j] == 5) {
				document.body.innerHTML = content + "<div id = 'cell_5'></div>";
			}
		}
	}
	content = document.body.innerHTML;
	document.body.innerHTML = "<div class = main_pole>" + "<div class = points>очки:<br>" + points + "</div>" + "<div class = play_pole>" + content + "</div>" + "</div>";
}

/*function Destroy() {
	for (var i=0; i<lines; i++) {
		for (var j=0; j<10; j++) {
			if (pole[i][j] == 0) break
			else if ((pole[i][j] != 0) && (j == 9)) {
				pole.pop();
				pole.unshift([0,0,0,0,0,0,0,0,0,0]);
				points++;
				console.log("points: " + points);
			}
		}
	}
}*/

function Destroy(){
	 for (var i=0; i<lines; i++) {
		for (var j=0; j<8; j++) {
			if ((pole[i][j] != 0) && (pole[i][j] == pole[i][j+1]) && (pole[i][j] == pole[i][j+2])) {
				if ((i == lines-1) || ((pole[i+1][j]!=0) && (pole[i+1][j+1]!=0)&& (pole[i+1][j+2]!=0))) {
					pole[i][j]=0;
					pole[i][j+1]=0;
					pole[i][j+2]=0;
					points++;
					console.log("points: " + points);
				}
			}
		}
	}
	for (var j=0; j<10; j++) {
		for (var i=0; i<(lines-2); i++) {
			if ((pole[i][j] != 0) && (pole[i][j] == pole[i+1][j]) && (pole[i][j] == pole[i+2][j])) {
				pole[i][j]=0;
				pole[i+1][j]=0;
				pole[i+2][j]=0;
				points++;
				console.log("points: " + points);
			}
		}
	}	
}

function Add() {
	var rand = Math.floor(Math.random()*10);
	for (var i=0; i<10; i++) {
		pole[0][i] = 0;
	}

		pole[0][rand] = Math.ceil(Math.random()*5);

		for (var i=0; i<lines; i++) {
			if (pole[i][rand] == 0) {
				break;
			}
			else if ((i == (lines-1)) && (pole[i][rand] != 0)) {
				Show(pole);
				document.body.innerHTML = "<div id='death'><audio src='muzichka.mp3' autoplay='autoplay'>?</audio></div>";
				alert("Game over!");
				clearInterval(TimeId1);
				clearInterval(TimeId2);

			}
		}	
}

function Sdvig() {
	var bool_sdvig = false;
	for (var i=(lines-2); i>=0; i--) {
		for (var j=0; j<10; j++) {
			if ((pole[i][j] != 0) && (pole[i+1][j] == 0)) {
				pole[i+1][j] = pole[i][j];
				pole[i][j] = 0;
				bool_sdvig = true;
			}
			else {
				if ((i == 0) && (j == 9) && !bool_sdvig) {
				}
			}
		}
	}
	Show();
	Destroy();
}

function arrKey(e) {
	var key = e.keyCode;
	e=e||window.event;

	if (key == 37) {
		for (var i=0; i<(lines-1); i++) {
			for (var j=1; j<10; j++) {
				if ((pole[i][j] != 0) && (pole[i+1][j] == 0) && (pole[i][j-1] == 0)) {
					pole[i][j-1] = pole[i][j];
					pole[i][j] = 0;
				}
			}
		}
		console.log("left");
	}
	if (key == 39) {
		for (var i=0; i<(lines-1); i++) {
			for (var j=8; j>=0; j--) {
				if ((pole[i][j] != 0) && (pole[i+1][j] == 0) && (pole[i][j+1] == 0)) {
					pole[i][j+1] = pole[i][j];
					pole[i][j] = 0;
				}
			}
		}
		console.log("right");
	}
	if (key == 40) {
		Sdvig();
		//Show();//отключено для увеличение быстродействия
		console.log("down");
	}

	Show();
}
