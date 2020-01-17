var cityList = [];

var id = "d135b5eb4488f4037056fc8637d7c502"

//city to local storage
function storeCities() {
    localStorage.setItem("cities", JSON.stringify(cityList));
}

// adds last searched as button
function createCityList(){
    $(".cityList").empty();
    cityList.forEach(function(city){
        $(".cityList").prepend($(`<button class="list-group-item list-group-item-action cityButton" data-city="${city}">${city}</button>`));
    })
}

// populate searched city as button to pull in Weather info for that city.
function init() {
    var storedCities = JSON.parse(localStorage.getItem("cities"));

    if (storedCities !== null) {
        cityList = storedCities;
    }
    createCityList();

    if (cityList) {
        var thisCity = cityList[cityList.length - 1]
        getCurrentWeather(thisCity, id);
        getForecast(thisCity, id);
    }
}

function getCurrentWeather(thisCity, id) {
    var weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${thisCity}&units=imperial&appid=${id}`;
}

