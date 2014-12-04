$(document).ready(function() {
	clearBody();
	init();
});

function init() {

	$("#contact").on("click", function() {
		clearPortfolio();
		$("#contactContent").fadeIn(1000);
	});
	$("#resume").on("click", function() {
		clearPortfolio();
		$("#resumeContent").fadeIn(1000);
	});
}

function clearBody() {
	$("a.listMember").on("click", function() {
		$("#contactContent").fadeOut(1000);
		$("#resumeContent").fadeOut(1000);
		
	});
}
function clearPortfolio() {
	$(".overlay3").slideUp(1000);
}