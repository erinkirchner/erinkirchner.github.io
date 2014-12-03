$(document).ready(function() {

//Instructions- when clicked; display information modal box
	$(".what").click(function() {
		$(".overlay").fadeIn(1000);
	});
	//Hide information modal box
	$("a.close").click(function() {
		$(".overlay").fadeOut(1000);
	});

var hotNum = Math.floor((Math.random() * 100) + 1);
var newGame = function() {
	hotNum = Math.floor((Math.random() * 100) + 1);
		console.log("The hot number is " + hotNum);
		document.getElementById('userGuess').focus();
};

$('.new').click(function() {
	newGame();
	$('#guessList').empty();
	$('#count').text(0);
	$('#feedback').text("Make Your Guess!");
	$('.win').remove();
});

$('#guessButton').click(function(e) {
	e.preventDefault();
	var userInput = parseInt($('#userGuess').val());
	$('#feedback').text('');
	var setMessage = function (message) {
		$('#feedback').text(message);
	}
	var diff = Math.abs(userInput - hotNum);
	if(userInput != "" && $.isNumeric(userInput) && userInput % 1 == 0 && userInput >=1 && userInput <=100) {
	} else {
		var outputMessage = function() {
			$('#feedback').html("<font size =-1>Enter a number between 1 and 100</font>");
		}
		setMessage(outputMessage);
		$('#userGuess').val('');
		return false;
	}
	

function higherLower() {
	if(userInput > hotNum) {
		$('#feedback').append(" Guess Lower.")
	} else if(userInput < hotNum) {
		$('#feedback').append(" Guess Higher.")
	}
}
function compareNum() {	
	if(userInput === hotNum) {
		setMessage("Congrats! You Got It!!");
		higherLower();
	}
	else if(diff > 0 && diff <= 10) {
		setMessage("Burning Up!");
		higherLower();
	} 
	else if(diff >= 11 && diff <= 20) {
		setMessage("You're getting hot!");
		higherLower();
	}
	else if(diff >= 21 && diff <= 30) {
		setMessage("Just Warm.");
		higherLower();
	}
	else if(diff >= 31 && diff <= 40) {
		setMessage("Pretty chilly.");
		higherLower();
	}
	else if(diff >= 41 && diff <= 50) {
		setMessage("BRRRR. It's Cold!");
		higherLower();
	}
	else if(diff >= 51) {
		setMessage("ICE COLD!");
		higherLower();
	}
}
compareNum();
$('#guessList').append("<li>" + userInput + "</li>");
$('#count').html(function(i, val) {
	return +val + 1;
});
$('#userGuess').val('');	

});
newGame();
});