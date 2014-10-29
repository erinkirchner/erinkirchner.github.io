$(document).ready(function() {
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

function init() {

$("#policy").click(function() {
	$("#policyPara").fadeIn(1000);
});

}