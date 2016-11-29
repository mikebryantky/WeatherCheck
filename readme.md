# Weather Check

Simple PhoneGap mobile application to show current weather conditions for a given US zip code or the phone's current location.  This was used as part of an extended education course taught to college students.

This app makes a RESTful call to a web service located at **http://www.mikebryant.com:8080/weatherlookup/WeatherLookup?zipCode=xxxxx**

Example result from the services <a href="http://www.mikebryant.com:8080/weatherlookup/WeatherLookup?zipCode=41339">http://www.mikebryant.com:8080/weatherlookup/WeatherLookup?zipCode=41339</a>:

``` json
{
    "status": "success",
    "zipCode": "41339",
    "cloudCoverPct": "0",
    "humidity": "46",
    "temperatureF": "66",
    "description": "Sunny",
    "windDirection": "SW",
    "windSpeedMph": "0",
    "currentIcon": "http://cdn.worldweatheronline.net/images/wsymbols01_png_64/wsymbol_0001_sunny.png",
    "maxTempF": "66",
    "minTempF": "53"
}
```
