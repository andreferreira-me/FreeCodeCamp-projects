$(document).ready(function() {
	// Load a new quote and set a background color on page load
	newQuote();
});

function newQuote() {
	// POST Request a new quote from Mahspape.com API
	var output = $.ajax({
		url: 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous',
		type: 'POST',
		data: {},
		dataType: 'json',
		success: function(data) {
			// Set the new quote on "p" and "author" tags
			$("#quote").text("\"" + data.quote + "\"");
			$("#author").text(data.author);

			// Set the new quote on the Tweet Button
			$("#tweet").attr("href", "https://twitter.com/intent/tweet?text=\"" + data.quote + "\" - " + data.author + "&via=andreferreira_");

		},
		// Trigger an alert when there is an error on request
		error: function(err) {
			alert(err);
		},
		// Set the Mashape API Key for the request
		 beforeSend: function(xhr) {
			 xhr.setRequestHeader("X-Mashape-Authorization", "qjaHLLoYTimshPLCs4MARhZI2Pkxp1IaA7pjsnSGQNCAAmq81s");
    }
	});

	// Change the background color
	changeBg();
}

function changeBg() {
	// Set an array of HEX colors for the background
	var colors = ["#A8D5B4", "#9DC4B6", "#98B9B6", "#E0D197", "#D0826F", "#C4CBB7", "#002131", "#0C3D66", "#01ACE2", "#7DDFFF"];

	// Generate a random number between 0 and the array length
	var random = Math.floor(Math.random() * colors.length);

	// Change the background-color for a random color of the array
	$( "#bg" ).animate({
		backgroundColor: colors[random],
	}, 1000 );
}
