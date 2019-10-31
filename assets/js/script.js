var key = "934de2453cafc9debca1f95622956ecd"


var currentWeatherQueryURL = "https://api.openweathermap.org/data/2.5/weather?&appid=" + key + "&units=imperial";

var currentUviQueryURL= "https://api.openweathermap.org/data/2.5/uvi?&appid="+key






$(".button").click(function(event){

    var cityName = $("#search-bar").val();

    console.log(cityName)

    $.ajax({
        url: currentWeatherQueryURL + "&q="+ cityName,
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



})