const apiKey = "35799d50b903d8cc80f027b5c881ff41"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q="

const searchButton = document.getElementById('search-button')
const searchInput = document.getElementById('search-input')

const weatherCard = document.getElementById('weather')
const searchBar = document.getElementById('searchbar')
const center = document.getElementById('center')
const bottom = document.getElementById('bottom')
const footer = document.getElementById('footer')

const temperature = document.getElementById('temp')
const place = document.getElementById('location')
const weatherStatus = document.getElementById('weather-status')
const humidity = document.getElementById('humidity-status')
const wind = document.getElementById('wind-status')

async function getWeather(cityName){
    try{
        const response = await fetch(`${apiUrl}${cityName}&appid=${apiKey}`)
        var data = await response.json()

        console.log(data)

        temperature.innerHTML = `<i class="fa-solid fa-temperature-half"></i> ${Math.round(data.main.temp)}&deg;c`
        place.innerText = `${data.name}, ${data.sys.country}`
        weatherStatus.innerText = data.weather[0].description
        humidity.innerText = `${data.main.humidity}%`
        wind.innerHTML = `${Math.round(data.wind.speed)} km/h ${data.wind.deg}&deg;`   
    } catch(error) {
        alert("City name must exist and be spelled correctly")
    }

    switch(data.weather[0].main){
        case 'Clear': 
            weatherCard.style.backgroundImage = 'url("media/clear2.jpg")';
            break;
        case 'Clouds': 
            weatherCard.style.backgroundImage = 'url("media/clouds2.jpg")';
            break;
        case 'Drizzle': 
            weatherCard.style.backgroundImage = 'url("media/drizzle.jpg")';
            break;
        case 'Rain': 
            weatherCard.style.backgroundImage = 'url("media/rain2.jpg")';
            break;
        case 'Mist': 
            weatherCard.style.backgroundImage = 'url("media/fog2.jpg")';
            break;
        case 'Fog': 
            weatherCard.style.backgroundImage = 'url("media/fog2.jpg")';
            break;
        case 'Snow': 
            weatherCard.style.backgroundImage = 'url("media/snow2.jpg")';
            break;
        default: 
            weatherCard.style.backgroundImage = 'url("media/clear2.jpg")';
            break;
    }

    
}

getWeather('manila')

searchInput.addEventListener('keypress', function(press){
    if(press.key == 'Enter'){
        getWeather(searchInput.value);
    }
})

searchButton.addEventListener('click', () => {
    getWeather(searchInput.value)
})
