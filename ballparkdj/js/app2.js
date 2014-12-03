$(document).ready(function() {
   
    init();
});

function init() {
    //What is This? Overlay-----------------------------
    $(".navListStyles a.howTo").on("click", function() {
        $(".overlay1").fadeIn(1000);
    });
    $("a.back").on("click", function() {
        $(".overlay1").fadeOut(1000);
    });
    //Color Scheme Overlay------------------------------
    $("a.colorScheme").on("click", function() {
        $("#colorOverlay").fadeIn(1000);
    });
    $(".backButton").on("click", function() {
        $("#colorOverlay").fadeOut(1000);
    });
    $(".clear").on("click", function() {
    	$("#insAppContainer").empty();
    	$("#playerName").value("#startingName");
    });
    SC.initialize({
        client_id: "dea41865ea6fdf49c5781a2859f4faf4",
        //redirect_uri: "http://example.com/callback.html",
    });
}
//---Which player was selected--------------------------------
$('#guessButton').on('click', function(e) {
    e.preventDefault();
    player = $('#playerName option:selected').text();
    switch (player) {
    case "Select a Player...":
        alert("Please select a player...");
        break;
    case "Jeff Bianchi":
        getSong(songId);
        break;
    case "Ryan Braun":
        songId = 67899945;
        getSong(songId);
        break;
    case "Khris Davis":
        songId = 69152343;
        getSong(songId);
        break;
    case "Marco Estrada":
        songId = 54437225;
        getSong(songId);
        break;
    case "Yovani Gallardo":
        songId = 135749780;
        getSong(songId);
        break;
    case "Matt Garza":
        songId = 16115487;
        getSong(songId);
        break;
    case "Scooter Gennett":
        songId = 20659471;
        getSong(songId);
        break;
    case "Carlos Gomez":
        songId = 103543934;
        getSong(songId);
        break;
    case "Kyle Lohse":
        songId = 39412428;
        getSong(songId);
        break;
    case "Jonathan Lucroy":
        songId = 155104316;
        getSong(songId);
        break;
    case "Martin Maldonado":
        songId = 104284652;
        getSong(songId);
        break;
    case "Lyle Overbay":
        songId = 155105345;
        getSong(songId);
        break;
    case "Wily Peralta":
        songId = 70999756;
        getSong(songId);
        break;
    case "Mark Reynolds":
        songId = 84033082;
        getSong(songId);
        break;
    case "Logan Schafer":
        songId = 19980792;
        getSong(songId);
        break;
    case "Jean Segura":
        songId = 110850755;
        getSong(songId);
        break;
    case "Rickie Weeks":
        songId = 127087965;
        getSong(songId);
        break;
    }
});
//get roster-----------------------------------

function getSong() {
	SC.get('/tracks/' + songId, function(tracks) {
		$("#insAppContainer").prepend("<p>"+ tracks.title +"</p>")
	});
    
    SC.stream('/tracks/' + songId, function(sound) {
        $("#startButton").on("click", function(e) {
            e.preventDefault();
            sound.start();
        });
        $("#stopButton").on("click", function(e) {
            e.preventDefault();
            sound.stop();
        });
    });
}