var temp = "F";

$(document).ready(function() {
	getLocation();
});

function changeTemp() {
	switch (temp) {
		case "F":
			var tempF = $("#temp").html();
			var tempC = (tempF - 32) / 1.8;
			$("#temp").text(tempC);
			temp = "C";
			break;
		case "C":
			var tempC = $("#temp").html();
			var tempF = tempC * 9/5 + 32;
			$("#temp").text(tempF);
			temp = "F";
			break;
	}
}

function currentWeather(position) {
	var lat = position.coords.latitude;
	var lon = position.coords.longitude;

	// POST Request a new quote from Mashape.com API
	var output = $.ajax({
		url: 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&units=imperial&APPID=20b9cb396f4ed0b2a317704d62753e6c',
		type: 'POST',
		data: {},
		dataType: 'json',
		success: function(data) {
			$("#city").text(data.name);
			$("#condition").attr('src', 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png');
			$("#weather").text(data.weather[0].main);
			$("#temp").text(data.main.temp);
		},
		// Trigger an alert when there is an error on request
		error: function(err) {
			alert(err);
		}
	});
}

function getLocation() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(currentWeather);
	} else {
		alert("Geolocation is not supported by this browser.");
	}
}