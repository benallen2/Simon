var simon = [];
var player = [];
var counter = 0;
var strict = true;
var pattern = [];

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

function counterCheck(num){
	counter = num;
	$(".patterncount").html("Pattern count: " + (counter));
}

function gameStart(){
	counterCheck(1);
	simon = makeSimon();
	strict = true;
	player = [];
	$("#start").html("Start!");
}

function makeSimon(){
	for (var i = 0; i < 20; i++){//sets up the full simon array
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
}

function startit(){
	$("#start").click(function(){
		pattern = simon.slice(0, counter + 1);
		flashes(pattern, 0);
		counter++;
		$("#start").html("Next Step");
		counterCheck(counter);
		console.log(counter);
		player = [];
	});
}



function flashes(arr, j){
	
	if (j < arr.length){
		setTimeout(function(){
			sounds[simon[j]].play();		
			$("#" + simon[j]).fadeTo("fast", 0.33).fadeTo("fast", 1);
			flashes(arr, j + 1);
		}, 1000);
		console.log(pattern);
		
	}

}


function checkCorrect(){
	for (var i = 0; i < player.length; i++){
		if (player[i] === pattern[i]){
			continue;
		}
		else if (strict === true){
			makeSimon();
			player = [];
			pattern = [];
			alert("Strict Mode ON: Everything will reset on error");
			console.log(simon);
			counter = 0;
			$("#start").html("Play!");

		}
		else if (strict === false){
			alert("listen again...");
			flashes(pattern, 0);
			player = [];
		}
	}
	
}


function startHover(){
	$("#start").mouseover(function(){
		$(this).removeClass("btn-warning");
		$(this).addClass("btn-danger");
	})
	$("#start").mouseout(function(){
		$(this).removeClass("btn-danger");
		$(this).addClass("btn-warning");
	})
	$("#restart").click(function(){
		makeSimon();
		player = [];
		pattern = [];
		counter = 0;
		$("#start").html("Play!");
		$(".patterncount").html("Pattern count: " + (counter));
	})
	$("#strict").click(function(){
		strict = !strict;

		$(this).text(function(i, text){
			console.log(strict);
			
			return text === "Strict Mode: On" ? "Strict Mode: Off" : "Strict Mode: On";
		})

	})
}


function colorClicks(){
	$(".block").click(function(){

		sounds[this.id].play();
		$(this).fadeTo("fast", 0.33).fadeTo("fast", 1);
		player.push(this.id);
		checkCorrect();
		if (player.length == 3){
			alert("You Win!")
		}
				
	})
}

$(document).ready(function(){
	startit();
	colorClicks();
	$(".patterncount").html("Pattern count: " + (counter));
	makeSimon();
	startHover();
})


