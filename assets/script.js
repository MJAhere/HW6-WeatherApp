var cityList = [];

var id = "d135b5eb4488f4037056fc8637d7c502"

//city to local storage
function storeCities() {
    localStorage.setItem("cities", JSON.stringify(cityList));
}


function createCityList(){
    $(".cityList").empty();
    cityList.forEach(function(city){
        $(".cityList").prepend($(`<button class="list-group-item list-group-item-action cityButton" data-city="${city}">${city}</button>`));
    })
}