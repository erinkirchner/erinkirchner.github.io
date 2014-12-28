$(document).ready(function() {

    clearBox();
	init();
    
});


function init () {
    $('#policy').on("click", function() {
       
        $('#policyContent').slideDown(1000);
        if (e.keycode == 13) {
            e.preventDefault();
        }
    });

    $('#location').on("click", function() {
        
        $('#contactContent').slideDown(1000);
    });
    $('#about').on("click", function() {

        $('#aboutContent').slideDown(1000);
    });
    $('#picSliderWrap').on("click", function() {
        $(this).toggleClass("picSliderWrapOut", 1000, "slide");
    });
}

function clearBox () {
    $("a.listStyle").on("click", function() {
        $('#policyContent').slideUp();
        $('#contactContent').slideUp();
        $('#aboutContent').slideUp();
    });
}

