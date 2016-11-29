$(function () {

    /**
     * Called when the user enters a zip code and clicks the 'Check' button.
     */
    $("#checkWeatherBtn").click(function () {
        var zipCode = $.trim($("#zipCode").val());
        getWeather(zipCode);
    }); // end $("#checkWeatherBtn").click(...



    /**
     * Called when the user clicks the 'Use My Current Location' button.
     */
    $("#checkWeatherCurrLocBtn").click(function () {
        navigator.geolocation.getCurrentPosition(geolocationSuccess);

        /**
         * Gets the device's current location (in lat and long decimal format).
         *
         * @params position (Object) contains the following attributes:
         *              position.coords.latitude
         *              position.coords.longitude
         *              position.coords.altitude
         *              position.coords.accuracy
         *              position.coords.altitudeAccuracy
         *              position.coords.heading
         *              position.coords.speed
         *              position.timestamp
         */
        function geolocationSuccess(position) {
            var latlong = position.coords.latitude + "," + position.coords.longitude;
            getWeather(latlong);

        }
    }); // end $("#checkWeatherCurrLocBtn").click(...



    /**
     * Sends request to the weather web service. It then updates the
     * information on the page with weather data..
     */
    function getWeather(location) {
        var theURL = "http://www.mikebryant.com:8080/weatherlookup/WeatherLookup?zipCode=" + location;

        $.ajax({
            type: "GET",
            url: theURL,
            cache: false,
            dataType: "jsonp",
            jsonpCallback: 'jsonCallback',
            contentType: "application/json",
            success: function (data, textStatus, jqXHR) {
                if (data.status == 'success') {
                    $("#resultsIcon").attr("src", data.currentIcon);

                    $("#zipCodeResults").html(data.zipCode);
                    $("#currentConditions").html(data.description);
                    $("#cloudCover").html(data.cloudCoverPct);
                    $("#humidity").html(data.humidity);
                    $("#temperatureF").html(data.temperatureF);
                    $("#minTempF").html(data.minTempF);
                    $("#maxTempF").html(data.maxTempF);
                    $("#windDirection").html(data.windDirection);
                    $("#windSpeedMph").html(data.windSpeedMph);
                } else {
                    $("#results").html("Could not get current conditions for " + data.zipCode + ".");
                }

                $.mobile.navigate("#resultsPage");
            }
        });
    }  // end getWeather


});
