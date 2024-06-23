// API URL for default city (Delhi)
const defaultUrl = 'https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=99de2c7918f16b4648fec06f0118b371&units=metric';

// DOM elements
const dis_city = document.querySelector('.city');
const dis_temp = document.querySelector('.temp');
const dis_humidity = document.querySelector('.humidity');
const dis_wind = document.querySelector('.wind');
const weather_icon = document.querySelector('.weather-icon');

// Function to fetch and display weather data
const weather_data = async (url) => {
    try {
        // Fetching data from the API
        const response = await fetch(url);
        const result = await response.json();

        // Displaying weather data
        if (result.weather[0].main == "Snow") {
            weather_icon.src = `images/snow.png`;
        }
        else if (result.weather[0].main == "Clouds") {
            weather_icon.src = `images/clouds.png`;
        }
        else if (result.weather[0].main == "Drizzle") {
            weather_icon.src = `images/drizzle.png`;
        }
        else if (result.weather[0].main == "Mist") {
            weather_icon.src = `images/mist.png`;
        }
        else if (result.weather[0].main == "Rain") {
            weather_icon.src = `images/rain.png`;
        }
        else if (result.weather[0].main == "Rain") {
            weather_icon.src = `images/rain.png`;
        }
        else{
            weather_icon.src = `images/clear.png`;
        }
        dis_city.innerHTML = result.name;
        dis_temp.innerHTML = result.main.temp + "°C";
        dis_humidity.innerHTML = result.main.humidity + "%";
        dis_wind.innerHTML = result.wind.speed + "km/h";
        console.log(result);

    } catch (error) {
        // Handle errors by displaying an error message
        console.error(error);
        dis_city.innerHTML = 'Check City Name';
        dis_temp.innerHTML = '';
        dis_humidity.innerHTML = '';
        dis_wind.innerHTML = '';
    }
};

// Initial data fetching on page load
let url = defaultUrl;
window.addEventListener('load', () => weather_data(url));

// Event listener for search button
const search = document.querySelector('.submit');
search.addEventListener('click', () => {
    // Get user input and update the API URL
    const userInput = document.querySelector('.userInput').value.toLowerCase();
    url = `https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=99de2c7918f16b4648fec06f0118b371&units=metric`;
    weather_data(url);
});
