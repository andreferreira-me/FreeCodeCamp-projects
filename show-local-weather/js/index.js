var unit;

$(document).ready(function() {
	  unit = "°F";
		$('#unit').text(unit);

    getLocation();
});

function FahrenheitToCelsius(tempF){
	return ((tempF - 32) / 1.8).toFixed(2);
}

function CelsiusToFahrenheit(tempC){
	return (tempC * 9 / 5 + 32).toFixed(2);
}

function changeUnit() {
    switch (unit) {
        case "°F":
            var tempF = $("#temp").html();
            $("#temp").text(FahrenheitToCelsius(tempF));

						unit = "°C";
						$("#unitButton").text("Convert to Fahrenheit");
            break;

        case "°C":
            tempC = $("#temp").html();
            $("#temp").text(CelsiusToFahrenheit(tempC));

						unit = "°F";
						$("#unitButton").text("Convert to Celsius");
            break;
    }

		$("#unit").text(unit);
}

function currentWeather(position) {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    var apiKey = 'b288b9757522f71ffd04333fb95b7b80';

    $.ajax({
        type: 'GET',
        url: "http://api.openweathermap.org/data/2.5/weather?type=like&units=imperial"+
						"&lat=" + lat + "&lon=" + lon + "&&APPID=" + apiKey,
        success: function(data) {
					if(data.cod == "404"){
						alert(data.message + " Please, reload the page and try again.");
					}else{

            var desc = data.weather[0].description.split(" ");

            $.each(desc, function(i, word) {
                desc[i] = word.charAt(0).toUpperCase() + word.slice(1);
            });

            desc = desc.join(" ");

            $('#city').text(data.name);

            $('#temp').text(data.main.temp.toFixed(2));

            $('#weatherDesc').text(desc);
            $('#icon').attr('alt', desc);

            $('#icon').attr('src', "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png");
					}
        },
        error: function(data) {
            alert("Error to connect to weather API. Please, reload the page and try again.")
        }
    });
}

function getLocation() {
  function geo_success(position) {
    currentWeather(position);
  }

  function geo_error() {
    alert("Geolocation is not supported by this browser.");
  }

  navigator.geolocation.getCurrentPosition(geo_success, geo_error);
}
