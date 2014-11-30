$(document).ready(function() {
	clearBody();
	init();
});

function init() {

	$("#contact").on("click", function() {
		$("#contactContent").slideDown(1000);
	});
	$("#resume").on("click", function() {
		$("#resumeContent").slideDown(1000);
	});
}

function clearBody() {
	$("a.listMember").on("click", function() {
		$("#contactContent").slideUp(1000);
		$("#resumeContent").slideUp(1000);
		$().slideUp(1000);
	});
}