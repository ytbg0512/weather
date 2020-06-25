const API_KEY = keys.API_KEY;

const weatherContainer = document.querySelector(".js-weather");
const temperatureText = weatherContainer.querySelector("h1");
const cityText = weatherContainer.querySelector("#cityText");
const minMaxText = weatherContainer.querySelector("#minMax");

const COORDS = "coords";

function handleGeoError() {
    alert("위치 정보를 가져올 수 없습니다. 날씨 정보를 확인하려면 위치 정보 사용을 허용해주세요.");
}

function handleGeoSuccess(coordinates) {
    const coordsObj = {
        latitude: coordinates.coords.latitude,
        longitude: coordinates.coords.longitude
    }
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
    loadCoords();
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords == null) {
        askForCoords();

    } else {
        const parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }
}

function getWeather(lat, lon) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`).then(function(response) {
        return response.json();
    }).then(function(json) {
        const temp = Math.round(json.main.temp);
        const place = json.name;
        const feelingTemp = Math.round(json.main.feels_like);
        const tempMax = Math.round(json.main.temp_max);
        const tempMin = Math.round(json.main.temp_min);
        
        temperatureText.innerText = `${temp}º`;
        cityText.innerText = `${place}`;
        minMaxText.innerText = `최고 ${tempMax}º / 최저 ${tempMin}º`;
    });
}

function init() {
    loadCoords();
    setInterval(loadCoords, 60000);
}

init();