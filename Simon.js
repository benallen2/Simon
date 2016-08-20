var simon = [];
var counter = 1;
var choices = "";


function pattern(){
	$(".btn").click(function(){
	var rand = Math.floor(Math.random() * 4);
	console.log(rand);
	if (rand === 0){
		simon.push("red")		
	}
	else if (rand === 1){
		simon.push("green")
	}
	else if (rand === 2){
		simon.push("blue")
	}
	else if (rand === 3){
		simon.push("yellow")
	}
});
	for (var i = 0; i < simon.length; i++){
		simon.forEach(flash(simon[i]));
		}
	
}

function flash(elem){
	$("#" + elem).addClass(elem + "flash");
}



function startHover(){
	$(".btn").mouseover(function(){
		$(this).removeClass("btn-warning");
		$(this).addClass("btn-danger");
	})
	$(".btn").mouseout(function(){
		$(this).removeClass("btn-danger");
		$(this).addClass("btn-warning");
	})
}


$(document).ready(function(){
	startHover();
	pattern();
	$(".patterncount").html("# of flashes: " + counter);

})