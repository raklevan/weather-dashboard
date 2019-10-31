var key = "934de2453cafc9debca1f95622956ecd"


var currentWeatherQueryURL = "https://api.openweathermap.org/data/2.5/weather?&appid=" + key + "&units=imperial";

var currentUviQueryURL= "https://api.openweathermap.org/data/2.5/uvi?&appid="+key

var forecastWeatherQueryURL= "https://api.openweathermap.org/data/2.5/forecast?appid=" +key+"&units=imperial"





$(".button").click(function(event){

    var cityName = $("#search-bar").val();

    runCity(cityName);

    forecast(cityName);

})




function runCity(city){

    console.log(city)

    $.ajax({
        url: currentWeatherQueryURL + "&q="+ city,
        method: "GET"

    }).then(function(response){

        console.log(response.main.temp)
         $("#current-temperature").text(" "+response.main.temp)

         $("#current-humidity").text(" "+response.main.humidity)

         $("#current-windspeed").text(" "+response.wind.speed)

         $.ajax({

            url: currentUviQueryURL+"&lat="+response.coord.lat+"&lon="+response.coord.lon,
            method: "GET"
         }).then(function(response){

            console.log(response.value)
            $("#current-uvi").text(" "+response.value)

         })
        //  $("#current-temperature").text(" "+response.main.temp)

    })
}


function forecast(city){
    $.ajax({
        url: forecastWeatherQueryURL+ "&q="+ city,
        method: "GET"
    }).then(function(response){

        for (let i = 0; i < 5; i++) {
            $("#forecast-column").append("<div class='card'> <div class='card-body'> <h5 class='card-title'>"+response.list[8*i].dt_txt  +"</h5> temperature: "+ response.list[8*i].main.temp+
            "<br> humidity: " + response.list[8*i].main.humidity +
            "<br> wind speed: "+ response.list[8*i].wind.speed+"</div></div>")


            
        }




    })
}