$(document).ready(function() {

$("#listEntry").keypress(function(e) {
	if(e.which == 13) {
		console.log('test');
		e.preventDefault();
		addListEntry();
		}
});	
function addListEntry() {

	var toAdd = $("#listEntry").val();
	var entry = $('<li class="listItems">' + toAdd + '<button class="deleteButton"></button></li>');
	if (write.length === 0 || write.length > 30) {
		return false;
	} else {

	$("#mainList").append(entry);
	$("#listEntry").val('');
}

function deleteItem() {

$("#mainList").on('click', '.deleteButton', function() {
	$(this).parent().remove();
	}
/*function preventTheDefault() { 
var form = $("#listForm");
form.submit(function(e) {
	e.preventDefault();
	}
}*/









