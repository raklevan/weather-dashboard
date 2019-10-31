var key = "934de2453cafc9debca1f95622956ecd"


var queryURL = "https://api.openweathermap.org/data/2.5/weather?&appid=" + key;






$(".button").click(function(event){

    var cityName = $("#search-bar").val();

    console.log(cityName)

    $.ajax({
        url: queryURL + "&q="+ cityName,
        method: "GET"

    }).then(function(response){

        console.log(response.main.temp)
         $("#current-temperature").text(" "+response.main.temp)

         $("#current-humidity").text(" "+response.main.humidity)

         $("#current-windspeed").text(" "+response.wind.speed)

        //  $("#current-temperature").text(" "+response.main.temp)





    })



})