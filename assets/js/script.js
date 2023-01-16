// get cityt
// https://openweathermap.org/api/geocoding-api#direct

// get weather
// https://openweathermap.org/forecast5

// key 87dd53f383dce3f3aa56ba25dd615eb8

// today 12pm = 3
// tomorrow 12pm = 11
// day 3 12pm = 19
// day 4 12pm = 27
// day 5 12pm = 35

var searchForm = document.querySelector("#citySearch");
var searchInput = document.querySelector("#cityInput");

// Enable search with an Enter key
searchInput.addEventListener("keyup", function(event){
  if (event.keyCode === 13){
    event.preventDefault();
    searchForm.click()
  }
})

var cityInput = document.getElementById("cityInput");
var citySearch = document.getElementById("citySearch");
var locationSearch = document.getElementById("locationSearch");
var deleteSaved = document.getElementById("deleteSaved");

var tempScale = "metric";

var cityLat = "-33.8698439";
var cityLon = "151.2082848";

var mainHeading = document.querySelector("#mainHeading")

var icon1 = document.querySelector("#date1Icon");
var date1 = document.querySelector("#date1Day");
var temp1 = document.querySelector("#date1Temp");
var humid1 = document.querySelector("#date1Humid");
var wind1 = document.querySelector("#date1Wind");

var icon2 = document.querySelector("#date2Icon");
var date2 = document.querySelector("#date2Day");
var temp2 = document.querySelector("#date2Temp");
var humid2 = document.querySelector("#date2Humid");
var wind2 = document.querySelector("#date2Wind");

var icon3 = document.querySelector("#date3Icon");
var date3 = document.querySelector("#date3Day");
var temp3 = document.querySelector("#date3Temp");
var humid3 = document.querySelector("#date3Humid");
var wind3 = document.querySelector("#date3Wind");

var icon4 = document.querySelector("#date4Icon");
var date4 = document.querySelector("#date4Day");
var temp4 = document.querySelector("#date4Temp");
var humid4 = document.querySelector("#date4Humid");
var wind4 = document.querySelector("#date4Wind");

var icon5 = document.querySelector("#date5Icon");
var date5 = document.querySelector("#date5Day");
var temp5 = document.querySelector("#date5Temp");
var humid5 = document.querySelector("#date5Humid");
var wind5 = document.querySelector("#date5Wind");





function results() {
  storeSearch()  
  
  var cityLocation = `http://api.openweathermap.org/geo/1.0/direct?q=${cityInput.value}&limit=1&appid=87dd53f383dce3f3aa56ba25dd615eb8`
    console.log(cityLocation);

    fetch(cityLocation)
    .then(function (response) {
      if (response.ok) {
          response.json().then(function (data) {
          console.log(data);
          console.log(data[0].name + ", " + data[0].country);
          console.log(data[0].lat);
          console.log(data[0].lon);
          cityLat = data[0].lat;
          cityLon = data[0].lon;
          // get lat
          //get long
          getWeather();
        });
        }
      else {
        alert('Error: ' + response.statusText);
      }
    });
}





function getWeather() {
  
  var speedType = ""
  var weatherDeg = "";
  var tempType = "";
  
  if (localStorage.getItem("temp") === "true") {
    weatherDeg = "°F"
    tempType = "imperial"
    speedType = "mph"
  } else {
    weatherDeg = "°C"
    tempType = "metric"
    speedType = "m/s"
  }

    var cityWeather = `http://api.openweathermap.org/data/2.5/forecast?lat=${cityLat}&lon=${cityLon}&units=${tempType}&appid=87dd53f383dce3f3aa56ba25dd615eb8`
    console.log(cityWeather);
    
    fetch(cityWeather)
    .then(function (response) {
      if (response.ok) {
          response.json().then(function (data) {
          console.log(data);
          // console.log(data.list[3].weather[0].icon);
          // console.log(icon1);
          // console.log(data.city.name + ", " + data.city.country);
          // console.log(dayjs(data.list[3].dt_txt).format('dddd, DD MMMM YYYY'));
          // console.log(dayjs(data.list[3].dt_txt).format('dddd'));
          // console.log(data.list[3].main.temp);
          // console.log(data.list[3].wind.speed);
          // console.log(data.list[3].main.humidity);

//Title

mainHeading.innerHTML = "5 Day Weather Forecast - " + data.city.name + ", " + data.city.country

//day 1
            var icona = data.list[3].weather[0].icon;
              icon1.src = `http://openweathermap.org/img/wn/${icona}@2x.png`;
            date1.innerHTML = "(" + dayjs(data.list[3].dt_txt).format('dddd, DD MMMM YYYY') + ")";
            temp1.innerHTML = "Temp: " + data.list[3].main.temp + weatherDeg;
            humid1.innerHTML = "Humidity: " + data.list[3].main.humidity + "%";
            wind1.innerHTML = "Wind Speed: " + data.list[3].wind.speed + speedType;
 
//day 2
var iconb = data.list[11].weather[0].icon;
icon2.src = `http://openweathermap.org/img/wn/${iconb}@2x.png`;
//date2.innerHTML = dayjs(data.list[11].dt_txt).format('dddd');
temp2.innerHTML = "Temp: " + data.list[11].main.temp + weatherDeg;
humid2.innerHTML = "Humidity: " + data.list[11].main.humidity + "%";
wind2.innerHTML = "Wind Speed: " + data.list[11].wind.speed + speedType;

//day 3
var iconc = data.list[19].weather[0].icon;
icon3.src = `http://openweathermap.org/img/wn/${iconc}@2x.png`;
date3.innerHTML = dayjs(data.list[19].dt_txt).format('dddd');
temp3.innerHTML = "Temp: " + data.list[19].main.temp + weatherDeg;
humid3.innerHTML = "Humidity: " + data.list[19].main.humidity + "%";
wind3.innerHTML = "Wind Speed: " + data.list[19].wind.speed + speedType;

//day 4
var icond = data.list[27].weather[0].icon;
icon4.src = `http://openweathermap.org/img/wn/${icond}@2x.png`;
date4.innerHTML = dayjs(data.list[27].dt_txt).format('dddd');
temp4.innerHTML = "Temp: " + data.list[27].main.temp + weatherDeg;
humid4.innerHTML = "Humidity: " + data.list[27].main.humidity + "%";
wind4.innerHTML = "Wind Speed: " + data.list[27].wind.speed + speedType;

//day 5
var icone = data.list[35].weather[0].icon;
icon5.src = `http://openweathermap.org/img/wn/${icone}@2x.png`;
date5.innerHTML = dayjs(data.list[35].dt_txt).format('dddd');
temp5.innerHTML = "Temp: " + data.list[35].main.temp + weatherDeg;
humid5.innerHTML = "Humidity: " + data.list[35].main.humidity + "%";
wind5.innerHTML = "Wind Speed: " + data.list[35].wind.speed + speedType;


        });
        document.getElementById("hidden").id = "visible";
        }
      else {
        alert('Error: ' + response.statusText);
      }
    });


    
}


function storeSearch () {
  var new_data = document.getElementById('cityInput').value;
  localStorage.setItem('lastSearch', new_data);

  if(localStorage.getItem('searchHistory') == null) {
      localStorage.setItem('searchHistory', '[]')
    }

    var old_data = JSON.parse(localStorage.getItem('searchHistory'));
    if(old_data.includes(new_data)) {
      return;
    }

    old_data.push(new_data);
    localStorage.setItem('searchHistory', JSON.stringify(old_data));
    
    createButtons();
}



citySearch.addEventListener("click",results);

flexSwitchCheckReverse.addEventListener("change",updateTemp);

function updateTemp () {
  localStorage.setItem('temp', document.getElementById("flexSwitchCheckReverse").checked);
  getWeather()

}





// Dynamically create buttons for previous searches
var searchButtons = document.querySelector('.search-buttons');
var searchHeader = document.createElement('h6');
var trashBtn = document.querySelector('.fa-trash');

function createButtons (){
  var dropdownHistory = JSON.parse(localStorage.getItem('searchHistory'));
  if (dropdownHistory == null){
    searchButtons.remove();
    trashBtn.remove();
    return;
  }
    searchHeader.textContent = 'Search History';
    searchButtons.appendChild(searchHeader);
    for (var i = 0; i < dropdownHistory.length; i++){
    var searchButton = document.createElement('button');
    searchButton.textContent = dropdownHistory[i];
    searchButtons.appendChild(searchButton);
    searchButton.setAttribute('data-name', dropdownHistory[i])
    searchButton.classList.add('data-name-btn');
    searchButton.addEventListener('click', clickListenerFor(searchButton));
    }
  }
  
// Append a click event listener for each search button created in the previous function
    function clickListenerFor(button){
      return function (e){
      var citySearchName = button.dataset.name;
      console.log(citySearchName);
      localStorage.setItem('lastSearch', citySearchName);
      cityInput.value = citySearchName;
      
      results()
    }
  }


  // Add an Event Listener to the trash button to remove the history of searches
  trashBtn.addEventListener('click', function (){
  localStorage.removeItem('searchHistory')
  searchButtons.remove();
  trashBtn.remove();
})


function init() {
  createButtons();
}

init();