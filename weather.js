const API_KEY = keys.WEATHER_API_KEY;

const weatherContainer = document.querySelector(".js-weather");
const temperatureText = weatherContainer.querySelector("h1");
const cityText = weatherContainer.querySelector("#cityText");
const minMaxText = weatherContainer.querySelector("#minMax");

const COORDS = "coords";

function handleGeoError() {
    temperatureText.innerText = "불러올 수 없음";
    minMaxText.innerText = "날씨 정보를 확인하려면 이 텍스트를 눌러 위치 정보 사용을 허용해주세요.";
    minMaxText.classList.add("button");
    minMaxText.addEventListener("click", loadCoords);
}

function handleGeoSuccess(coordinates) {
    const coordsObj = {
        latitude: coordinates.coords.latitude,
        longitude: coordinates.coords.longitude
    }
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
    minMaxText.classList.remove("button");
    loadCoords();
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords == null) {
        temperatureText.innerText = "위치 정보 사용을 허용해주세요.";
        minMaxText.innerText = "위치 정보 사용을 허용하지 않으면 날씨 정보를 표시할 수 없습니다.";
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