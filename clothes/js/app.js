$(document).ready(function() {

    clearBox();
	init();
    
});

/*$.ajax(
	type: 'GET',
	url:"http://www.mapquestapi.com/directions/v2/route?key=Fmjtd%7Cluurnuutnh%2Cbn%3Do5-9wr05a&from=Lancaster,PA&to=York,PA&callback=renderNarrative",
	success: function() {

	}
	dataType: 'jsonp'
	);
*/
function init () {
    $('#policy').on("click", function() {
       
        $('#policyContent').slideDown(1000);
    });

    $('#location').on("click", function() {
        
        $('#contactContent').slideDown(1000);
    });
    $('#about').on("click", function() {

        $('#aboutContent').slideDown(1000);
    });
    $('#picSliderWrap').on("click", function() {
        $(this).toggleClass("picSliderWrapOut");
    });
}

function clearBox () {
    $("a.listStyle").on("click", function() {
        $('#policyContent').slideUp();
        $('#contactContent').slideUp();
        $('#aboutContent').slideUp();
    });
}
