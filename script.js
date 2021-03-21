var searchBar = document.querySelector('#searchbar');
var searchButton = document.querySelector('#searchbutton');
var previousSearches = document.querySelector('#searches');

//weather elements 
let currentCity = "currentCity"; 
let currentTemp = "currentTemp"; 
let currentHumidity = "currentHumidity"; 
let currentWindSpeed = "windSpeed";
let weatherIcon = "weatherIcon";

var API_KEY = 'ef1c4875324d0e3c275f2fe690d96608';

// var currentDay = moment().format('MMMM Do YYYY,');
// $("#currentDay").text(x);

searchButton.addEventListener("click", function() {

    // Capture Input Data
    var userLocation = searchBar.value;
    console.log(userLocation);
    // Make our API call 
    var url = `http://api.openweathermap.org/data/2.5/weather?q=${userLocation}&appid=${API_KEY}&units=imperial`;
    console.log(url)

    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data.main.temp);
            var weatherData = data;
            //inside the sucess function of the api call the function will fire async upon getting the result 
            var fiveDay = `http://api.openweathermap.org/data/2.5/forecast?q=${userLocation}&appid=${API_KEY}&units=imperial`;
            fetch(fiveDay)
            .then (res => res.json ())
            .then (data =>{
                //inside the success function of the nested api call 
                console.log(data);
            })
            
            //end async function 
        })
        
        .catch(err => console.log(err));

        for (i = 0; i < userLocation.length; i++) {
            var cities = [];
            window.localStorage.setItem(cities, JSON.stringify(userLocation));
        }
    
        // function displayWeather (data,userLocation) {
        //     currentCity.textContent = userLocation;
        //     currentTemp.textContent = 'Temperature: ' + data.main.temp;
        //     currentHumidity.textContent = 'Humidity: ' + data.main.humidity;
        //     currentWindSpeed.textContent = 'Wind Speed: ' + data.wind.speed;
        // }
});




 
    // Save User Query to Local Storage

    // query for data in localStorage

    // convert it to JS

    // Add NEW information 
     // Resave it back into localStorage