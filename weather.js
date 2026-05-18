// OpenWeatherMap API Configuration
const API_KEY = 'b6fd43953d13a6ff12ac629c8afc0612'; // Free tier API key
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

// State Management
let currentWeatherData = null;
let forecastData = null;
let currentCity = 'New York';

// DOM Elements
const loadingState = document.getElementById('loadingState');
const errorState = document.getElementById('errorState');
const weatherContent = document.getElementById('weatherContent');
const searchInput = document.getElementById('searchInput');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadWeatherByCity('New York');
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') searchWeather();
    });
});

// Search Weather
function searchWeather() {
    const city = searchInput.value.trim();
    if (city) {
        loadWeatherByCity(city);
        searchInput.value = '';
    }
}

// Retry Weather
function retryWeather() {
    loadWeatherByCity(currentCity);
}

// Load Weather by City Name
async function loadWeatherByCity(city) {
    showLoading();
    try {
        // Get coordinates from city name
        const geoResponse = await fetch(
            `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`
        );

        if (!geoResponse.ok) {
            throw new Error(`City "${city}" not found`);
        }

        const geoData = await geoResponse.json();
        const { lat, lon, name } = geoData;
        
        currentCity = name;
        currentWeatherData = geoData;

        // Fetch 5-day forecast
        const forecastResponse = await fetch(
            `${BASE_URL}/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
        );
        forecastData = await forecastResponse.json();

        // Display weather data
        displayCurrentWeather();
        displayForecast();
        showWeatherContent();
    } catch (error) {
        console.error('Error loading weather:', error);
        showError(error.message);
    }
}

// Display Current Weather
function displayCurrentWeather() {
    if (!currentWeatherData) return;

    const {
        name,
        main: { temp, feels_like, humidity, pressure },
        weather: [{ main, description, icon }],
        wind: { speed, deg },
        clouds: { all: cloudCover },
        visibility,
        sys: { sunset, sunrise }
    } = currentWeatherData;

    // Update DOM
    document.getElementById('cityName').textContent = name;
    document.getElementById('temperature').textContent = `${Math.round(temp)}°C`;
    document.getElementById('feelsLike').textContent = `${Math.round(feels_like)}°C`;
    document.getElementById('weatherDesc').textContent = description.charAt(0).toUpperCase() + description.slice(1);
    document.getElementById('humidity').textContent = `${humidity}%`;
    document.getElementById('humidityBar').style.width = `${humidity}%`;
    document.getElementById('windSpeed').textContent = `${(speed * 3.6).toFixed(1)} km/h`;
    document.getElementById('windDirection').textContent = `Direction: ${getWindDirection(deg)}`;
    document.getElementById('pressure').textContent = `${pressure} hPa`;
    document.getElementById('visibility').textContent = `${(visibility / 1000).toFixed(1)} km`;
    document.getElementById('cloudCover').textContent = `${cloudCover}%`;
    document.getElementById('lastUpdate').textContent = `Last updated: ${new Date().toLocaleTimeString()}`;

    // Set weather icon
    const iconElement = document.getElementById('weatherIcon');
    iconElement.textContent = getWeatherEmoji(icon);

    // UV Index (estimated from time of day)
    const hour = new Date().getHours();
    let uvIndex = 0;
    if (hour >= 6 && hour <= 18) {
        uvIndex = Math.round((hour - 6) / 12 * 11);
    }
    document.getElementById('uvIndex').textContent = uvIndex;
    document.getElementById('uvStatus').textContent = getUVStatus(uvIndex);

    // Dew Point calculation
    const dewPoint = calculateDewPoint(temp, humidity);
    document.getElementById('dewPoint').textContent = `${dewPoint}°C`;

    // Pressure status
    const pressureStatus = pressure > 1013 ? 'High' : pressure < 1013 ? 'Low' : 'Normal';
    document.getElementById('pressureStatus').textContent = pressureStatus;

    // Temperature color coding
    const tempElement = document.getElementById('temperature');
    tempElement.className = 'text-5xl font-bold text-white';
    if (temp > 30) tempElement.classList.add('temp-hot');
    else if (temp > 20) tempElement.classList.add('temp-warm');
    else if (temp > 10) tempElement.classList.add('temp-cool');
    else tempElement.classList.add('temp-cold');
}

// Display 7-Day Forecast
function displayForecast() {
    if (!forecastData) return;

    const forecastGrid = document.getElementById('forecastGrid');
    forecastGrid.innerHTML = '';

    const dailyForecasts = {};
    
    // Group by day
    forecastData.list.forEach(item => {
        const date = new Date(item.dt * 1000);
        const day = date.toLocaleDateString();
        
        if (!dailyForecasts[day]) {
            dailyForecasts[day] = item;
        }
    });

    // Display 7 days
    let count = 0;
    Object.values(dailyForecasts).forEach(forecast => {
        if (count >= 7) return;
        
        const date = new Date(forecast.dt * 1000);
        const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });
        const temp = Math.round(forecast.main.temp);
        const icon = forecast.weather[0].icon;
        const description = forecast.weather[0].main;

        const card = document.createElement('div');
        card.className = 'glass rounded-xl p-4 text-center weather-card hover:scale-105 transition-smooth cursor-pointer';
        card.innerHTML = `
            <p class="text-sm text-gray-400 mb-2">${dayName}</p>
            <p class="text-2xl mb-3">${getWeatherEmoji(icon)}</p>
            <p class="font-bold text-white mb-1">${temp}°C</p>
            <p class="text-xs text-gray-400">${description}</p>
        `;
        forecastGrid.appendChild(card);
        count++;
    });
}

// Display Hourly Forecast
function displayHourlyForecast() {
    if (!forecastData) return;

    const hourlyGrid = document.getElementById('hourlyGrid');
    hourlyGrid.innerHTML = '';

    forecastData.list.slice(0, 8).forEach(forecast => {
        const date = new Date(forecast.dt * 1000);
        const time = date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
        const temp = Math.round(forecast.main.temp);
        const icon = forecast.weather[0].icon;

        const card = document.createElement('div');
        card.className = 'glass rounded-lg p-3 text-center weather-card';
        card.innerHTML = `
            <p class="text-xs text-gray-400 mb-2">${time}</p>
            <p class="text-xl mb-2">${getWeatherEmoji(icon)}</p>
            <p class="font-bold text-white">${temp}°C</p>
        `;
        hourlyGrid.appendChild(card);
    });
}

// Utility Functions
function getWeatherEmoji(icon) {
    const iconMap = {
        '01d': '☀️',
        '01n': '🌙',
        '02d': '⛅',
        '02n': '🌙',
        '03d': '☁️',
        '03n': '☁️',
        '04d': '☁️',
        '04n': '☁️',
        '09d': '🌧️',
        '09n': '🌧️',
        '10d': '🌦️',
        '10n': '🌧️',
        '11d': '⛈️',
        '11n': '⛈️',
        '13d': '❄️',
        '13n': '❄️',
        '50d': '🌫️',
        '50n': '🌫️'
    };
    return iconMap[icon] || '🌤️';
}

function getWindDirection(degrees) {
    const directions = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
    const index = Math.round(degrees / 22.5) % 16;
    return directions[index];
}

function getUVStatus(uvIndex) {
    if (uvIndex < 3) return 'Low';
    if (uvIndex < 6) return 'Moderate';
    if (uvIndex < 8) return 'High';
    if (uvIndex < 11) return 'Very High';
    return 'Extreme';
}

function calculateDewPoint(temp, humidity) {
    // Magnus formula approximation
    const a = 17.27;
    const b = 237.7;
    const alpha = ((a * temp) / (b + temp)) + Math.log(humidity / 100);
    const dewPoint = (b * alpha) / (a - alpha);
    return Math.round(dewPoint);
}

// UI State Management
function showLoading() {
    loadingState.classList.remove('hidden');
    errorState.classList.add('hidden');
    weatherContent.classList.add('hidden');
}

function showError(message) {
    loadingState.classList.add('hidden');
    errorState.classList.remove('hidden');
    weatherContent.classList.add('hidden');
    document.getElementById('errorMessage').textContent = message || 'Unable to load weather data. Please try again.';
}

function showWeatherContent() {
    loadingState.classList.add('hidden');
    errorState.classList.add('hidden');
    weatherContent.classList.remove('hidden');
    displayHourlyForecast(); // Also display hourly
}
