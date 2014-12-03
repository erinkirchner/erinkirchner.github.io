$(document).ready(function() {

var body = $("body");
var playGame = $("button");
//fizzbuzz section
var playFizzBuzz = function(num) {
	body.append("<br><br>");
	for(var i = 1; i <= num; i++) {
		if(i % 15 === 0) {
			body.append("FizzBuzz");
		} else if (i % 3 === 0) {
			body.append("Fizz");
		} else if (i % 5 === 0) {
			body.append("Buzz");
		} else {
			body.append(i);
		}
	}
}	

//get input number
playGame.click(function() {
	var inpVal = $("#enteredNumber").val();
	if(0 > inpVal && inpVal <= 100) {
		playFizzBuzz(inpVal);
	} else if(inpVal > 100 || inpVal < 0) {
		alert("Please choose a number between 1-100");
	} 
	$("input").val("").focus();
})

// enter press
$("#enteredNumber").keypress(function(event){
	if(event.which == 13) {
		event.preventDefault();
		playGame.click();
	}
})
})