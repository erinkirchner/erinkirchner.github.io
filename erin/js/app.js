$(document).ready(function() {
	clearBody();
	init();
});

function init() {

	$("#contact").on("click", function() {
		
		$("#contactContent").fadeIn(1000);
	});
	$("#resume").on("click", function() {
		
		$("#resumeContent").fadeIn(1000);
	});
	$("#nameMain").on("click", function() {

		$("#portfolioContent").fadeIn(1000);
	})
}

function clearBody() {
	$("a.listMember").on("click", function() {
		$("#portfolioContent").fadeOut(1000);
		$("#contactContent").fadeOut(1000);
		$("#resumeContent").fadeOut(1000);
		
	});
}
