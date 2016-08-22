var simon = [];
var player = [];
var counter = 1;

var redBtn = $("#red");
var greenBtn = $("#green");
var blueBtn = $("#blue");
var yellowBtn = $("#yellow");


var sounds = {
  "red": new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3"),
  "green": new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3"),
  "blue": new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3"),
  "yellow": new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3")
};

function startit(){
	$("#start").click(function (){
		for (var i = 0; i < 20; i++){
			simon[i] = Math.floor(Math.random() * 4);
			switch(simon[i]){
				case 0: 
				simon[i] = ("red");
				break;
				case 1: 
				simon[i] = ("green");
				break;
				case 2: 
				simon[i] = ("blue");
				break;
				case 3:
				simon[i] = ("yellow");
				break;
			}
		}
		console.log(simon);
	});
}

function flashes(){
	for (var j = 0; j < simon.length; j++){
		
	}
}


function checkCorrect(){
	for (var k = 0; k < player.length; ){
		if (simon[k] == player[k]){
			k++;
		}
		else {
			k = 0;
			alert("Try Again");
			console.log(simon);
			break;
		}
	}
}

function colorClicks(){
	$(".block").click(function(){
		sounds[this.id].play();
		player.push(this.id);
		checkCorrect();
	})
}

$(document).ready(function(){
	startit();
	colorClicks();
})


