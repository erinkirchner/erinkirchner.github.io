$(document).ready(function(){
	
	//Fizz Buzz Section
	$('#playBtn').click(function() {
		$('.fb-output').empty();
		var finalNumber = $('#enteredNumber').val();
		if(finalNumber > 0 && finalNumber < 101) {
			for(var i = 1; i <= finalNumber; i++) {
				if(i % 15 === 0) {
					$('.fb-output').append('<br>Fizz Buzz<br>');
				} else if(i % 3 === 0) {
					$('.fb-output').append('<br>Fizz<br>');
				} else if(i % 5 === 0) {
					$('.fb-output').append('<br>Buzz<br>');
				} else {
					$('.fb-output').append('<br>' + i + '<br>');
				}
			}
		} else {
			alert("Please choose a number between 1 and 100");
		}
		$('#enteredNumber').val('');
	});
	
	//hit enter to submit
	$('#enteredNumber').keydown(function(e){
		if(e.which === 13) {
		$('#playBtn').trigger('click');
		}
	});
});