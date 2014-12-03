$(document).ready(function() {

	$('#mainList').on('click', '.deleteButton', deleteItem);
	$('#mainList').on('click', '.listItems', crossOut);
	$('#listEntry').keypress(function(e) {
		if(e.which == 13) {
			e.preventDefault();
			addListEntry();
		};
	})

});

function addListEntry() {
	var toAdd = $('#listEntry').val();
	toAdd = jQuery.trim(toAdd);
	var entry = $("<li class='listItems'>" + toAdd + "<button class='deleteButton'>X</button></li>")

	if ((toAdd.length === 0) || (toAdd.length > 30)) {
		return false;
	} else {

		$('#mainList').prepend(entry);
		$('#listEntry').val('');
	}
}

function deleteItem() {
	$(this).parent().remove();
}

function crossOut() {
	$(this).toggleClass('crossedOut');
}