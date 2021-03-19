var searchBar = document.querySelector('#searchbar');
var searchButton = document.querySelector('#searchbutton');

var API_KEY = 'ef1c4875324d0e3c275f2fe690d96608';

searchButton.addEventListener("click", function() {

    // Capture Input Data
    var userLocation = searchBar.value;
    console.log(userLocation);
    // Make our API call 
    var url = `http://api.openweathermap.org/data/2.5/weather?q=${userLocation}&appid=${API_KEY}`;
    console.log(url)

    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            
        })
        .catch(err => console.log(err));

    // Save User Query to Local Storage

    // query for data in localStorage

    // convert it to JS

    // Add NEW information 

    // Resave it back into localStorage
});