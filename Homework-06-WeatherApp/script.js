$(document).ready(function() {
  $("#search-button").on("click", function() {
    var searchValue = $("#search-value").val();

    // clear input box
    $("#search-value").val("");

    searchWeather(searchValue);
  });

  $(".history").on("click", "li", function() {
    searchWeather($(this).text());
  });

  function makeRow(text) {
    var li = $("<li>").addClass("list-group-item list-group-item-action").text(text);
    $(".history").append(li);
  }

  // I noticed that searchWeather was causing an error from history not being defined. At first I set it to an empty array, then I noticed I was losing the value every refresh.
  var history = JSON.parse(window.localStorage.getItem("history")) || [];
  //The saved values weren't being made into li buttons.
  if(history !== []) {
    for(i = 0; i < history.length; i++) {
      makeRow(history[i]);
    }
  }

  function searchWeather(searchValue) {
    $.ajax({
      type: "GET",
      url: "http://api.openweathermap.org/data/2.5/weather?q=" + searchValue + "&appid=e1c35146e4a2edbeb98aaad7633513f6&units=imperial",
      dataType: "json",
      success: function(data) {
        console.log(data);
        // create history link for this search
        if (history.indexOf(searchValue) === -1) {
          history.push(searchValue);
          window.localStorage.setItem("history", JSON.stringify(history));
    
          makeRow(searchValue);
        }
        
        // clear any old content
        $("#today").empty();

        // create html content for current weather
        var title = $("<h3>").addClass("card-title").text(data.name + " (" + new Date().toLocaleDateString() + ")");
        var card = $("<div>").addClass("card");
        var wind = $("<p>").addClass("card-text").text("Wind Speed: " + data.wind.speed + " MPH");
        var humid = $("<p>").addClass("card-text").text("Humidity: " + data.main.humidity + "%");
        var temp = $("<p>").addClass("card-text").text("Temperature: " + data.main.temp + " °F");
        var cardBody = $("<div>").addClass("card-body");
        var img = $("<img>").attr("src", "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png");

        // merge and add to page
        title.append(img);
        cardBody.append(title, temp, humid, wind);
        card.append(cardBody);
        $("#today").append(card);

        // call follow-up api endpoints
        lat = data.coord.lat;
        lon = data.coord.lon;
        console.log(lat, lon);
        getForecast(searchValue);
        getUVIndex(searchValue);
      }
    });
    
  }
  
//Get Started


function getForecast(searchValue) {
  $.ajax({
    type: "GET",
    url:"http://api.openweathermap.org/data/2.5/forecast?q=" + searchValue + "&appid=e1c35146e4a2edbeb98aaad7633513f6&units=imperial",
    dataType: "json",
    success: function(fiveDay) {
      console.log(fiveDay);
      console.log(fiveDay.city.name)
      console.log(fiveDay.list[7].dt_txt);
      console.log(fiveDay.list[7].main.temp);
      console.log(fiveDay.list[7].main.humidity);
      console.log(fiveDay.list[7].wind.speed);

      // clear old content... spelling forecast as forcast will break your code. trust me
      $("#forecast").empty();
      // create title for the forcast div. H6 was too small. H4 was a better size while still smaller than the main weather card title size
      $("#forecast").html("<h4>" + fiveDay.city.name +"'s Five Day Forecast</h4>");
      // need row to hold new cards... if you try $("#forecast").html again you overwrite your h4. ask me how I know
      $("#forecast").append("<div class='row'></div>");
      
      //need to go through all of the objects in fiveDay.list
      for(i = 0; i < fiveDay.list.length; i++){
        // I tried 'if(i === 7 || 15 || 23 || 31 || 39)' for my first attempt. It failed. I wanted every 24 hours from the searchWeather reply.
        // I saw 'if(data.list[i].dt_txt.indexOf("15:00:00") !== -1)' on Saturday's homework review. I'm still trying not to lie about what I wasn't getting.
        // I looked it up on W3Schools and comunity.servicenow.com. 
        // The -1 means you are looking to see if a dt_txt value of "15:00:00" never orrured in all the values of the list array, but the !== means the if statement is looking for every "15:00:00". 
        if(fiveDay.list[i].dt_txt.indexOf("12:00:00") !== -1) {
          console.log("New card made"); // verified I was no longer getting 40 cards made. now only 5 with the changes to my if statement.
          
          // I repurposed the card info from the original from searchWeather(). It didn't start working until I moved '$("#forecast").append("<div class='row'></div>");' out of the if statement.
          var title = $("<h5>").addClass("card-title").text(fiveDay.city.name + " (" + new Date(fiveDay.list[i].dt_txt).toLocaleDateString() + ")");
          var card = $("<div>").addClass("card col-sm-3");
          var wind = $("<p>").addClass("card-text").text("Wind Speed: " + fiveDay.list[i].wind.speed + " MPH");
          var humid = $("<p>").addClass("card-text").text("Humidity: " + fiveDay.list[i].main.humidity + "%");
          var temp = $("<p>").addClass("card-text").text("Temperature: " + fiveDay.list[i].main.temp + " °F");
          var cardBody = $("<div>").addClass("card-body");
          var img = $("<img>").attr("src", "http://openweathermap.org/img/w/" + fiveDay.list[i].weather[0].icon + ".png");

          title.append(img);
          cardBody.append(title, temp, humid, wind);
          card.append(cardBody);
          $("#forecast .row").append(card);




        }
      }
    }
  })
}

//uv index
var lat = "";
var lon = "";

function getUVIndex() {
  $.ajax({
    type: "GET",
    url:"http://api.openweathermap.org/data/2.5/uvi?appid=e1c35146e4a2edbeb98aaad7633513f6&lat=" + lat + "&lon=" + lon,
    dataType: "json",
    success: function(currentUV) {
      console.log(currentUV);
      console.log(currentUV.value);
      var dispUV = $("<p>").addClass("card-text").text("UV Index: " + currentUV.value);
      // asssign a color based on the scale associated with uv index (I looked on wikipedia to see their pattern)
        if(parseInt(currentUV.value) > 0 && parseInt(currentUV.value) <= 3){
          dispUV.css("background-color", "green");
        }
        if(parseInt(currentUV.value) > 3 && parseInt(currentUV.value) <= 6){
          dispUV.css("background-color", "yellow");
        }
        if(parseInt(currentUV.value) > 6 && parseInt(currentUV.value) <= 8){
          dispUV.css("background-color", "orange");
        }
        if(parseInt(currentUV.value) > 8){
          dispUV.css("background-color", "red");
        }

      // add UV index to current weather card
      $("#today .card-body").append(dispUV);
      
    }
  })
}

});
