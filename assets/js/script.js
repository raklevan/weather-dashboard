var key = "934de2453cafc9debca1f95622956ecd"

var currentDate= Date();

var recentCity = $("#history-column")

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

    localStorage.setItem("city", city)
    recentCity.append(JSON.stringify(localStorage.getItem("city")))
    console.log(localStorage)

    $.ajax({
        url: currentWeatherQueryURL + "&q="+ city,
        method: "GET"

    }).then(function(response){

        console.log(response.main.temp)
         $("#current-temperature").text(" "+response.main.temp)

         $("#current-humidity").text(" "+response.main.humidity)

         $("#current-windspeed").text(" "+response.wind.speed)

         console.log(currentDate)

         $("#city").text(response.name+"("+currentDate+")")

        

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
    $("#forecast-row").empty();

    $.ajax({
        url: forecastWeatherQueryURL+ "&q="+ city,
        method: "GET"
    }).then(function(response){

        for (let i = 0; i < 5; i++) {
            $("#forecast-row").append("<div class='col card'> <div class='card-body'> <h5 class='card-title'>"+response.list[8*i].dt_txt  +"</h5> temp: "+ response.list[8*i].main.temp+
            "<br> humidity: " + response.list[8*i].main.humidity +
            "<br> windspeed: "+ response.list[8*i].wind.speed+"</div></div>")
        }
    })
}