var simon = [];
var counter = 0;
var choices = "";


function pattern(){
	$(".btn").click(function(){
	var rand = Math.floor(Math.random() * 4);
	console.log(rand);
	if (rand === 0){
		simon.push("red")
		$("#red").addClass("redflash");//do this more generically later.
		setTimeout(function(){
			$("#red").removeClass("redflash");
		}, 800);
		console.log(simon);
	}
	else if (rand === 1){
		simon.push("green")
		$("#green").addClass("greenflash");//see above
		setTimeout(function(){
			$("#green").removeClass("greenflash");
		}, 800);
		console.log(simon);
	}
	else if (rand === 2){
		simon.push("blue")
		$("#blue").addClass("blueflash");
		setTimeout(function(){
			$("#blue").removeClass("blueflash");
		}, 800);
		console.log(simon);
	}
	else if (rand === 3){
		simon.push("yellow")
		$("#yellow").addClass("yellowflash");
		setTimeout(function(){
			$("#yellow").removeClass("yellowflash");
		}, 800);
		console.log(simon);
	}
	})
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
})