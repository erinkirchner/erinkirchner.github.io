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
       
        $('#policyContent').fadeIn(1000);
    });

    $('#location').on("click", function() {
        
        $('#contactContent').fadeIn(1000);
    });
}

function clearBox () {
    $("a.listStyle").on("click", function() {
        $('#policyContent').fadeOut(1000);
        $('#contactContent').fadeOut(1000);
    });
}
