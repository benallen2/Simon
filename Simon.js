var simon = [];
var counter = 0;
var choices = "";
var strict = true;

function pattern(){
	$("#start").click(function(){
	var rand = Math.floor(Math.random() * 4);
	
	if (rand === 0){
		simon.push("red");		
	}
	else if (rand === 1){
		simon.push("green");
	}
	else if (rand === 2){
		simon.push("blue");
	}
	else if (rand === 3){
		simon.push("yellow");
		}
	counter++;
	$(".patterncount").html("# of flashes: " + counter);
	console.log(simon);
	if (simon.length === 20){
		alert("Game Over");
		counter = 0;
		simon = [];
	}
	simon.forEach(flashes(simon));
	});//end of click function
}

function flashes(elem){

	$(elem).each(function (index){
		$("#" + elem).delay(800 * index).addClass(elem + "flash");
	});

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
		location.reload();
	})
	$("#strict").click(function(){
		strict = !strict;

		$(this).text(function(i, text){
			console.log(strict);
			
			return text === "Strict Mode: On" ? "Strict Mode: Off" : "Strict Mode: On";
		})

	})
}


$(document).ready(function(){
	startHover();	
	pattern();

})