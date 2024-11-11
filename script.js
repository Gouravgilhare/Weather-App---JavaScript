const apiKey = "af43f91c2767d5988a5044658a22dc70";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".ImgIcon");

async function checkWeather(cityName) {
    const response = await fetch(apiUrl + cityName + "&appid=" + apiKey);
    var data = await response.json();

    console.log(data);

    document.querySelector('.cityName').innerHTML = data.name;
    document.querySelector('.temp1').innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
    document.querySelector('.wind').innerHTML = data.wind.speed + " km/h";


    if (data.weather[0].id == "801") {
        weatherIcon.src = " https://openweathermap.org/img/wn/04d@2x.png";
    }
    else if (data.weather[0].id == "800") {
        weatherIcon.src = " https://openweathermap.org/img/wn/01d@2x.png";
    }
    else if (data.weather[0].id == "500") {
        weatherIcon.src = " https://openweathermap.org/img/wn/10d@2x.png";
    }
    else if (data.weather[0].id == "300") {
        weatherIcon.src = " https://openweathermap.org/img/wn/09d@2x.png";
    }
    else if (data.weather[0].id == "600") {
        weatherIcon.src = " https://openweathermap.org/img/wn/13d@2x.png";
    }
    else if (data.weather[0].id == "701") {
        weatherIcon.src = " https://openweathermap.org/img/wn/50d@2x.png";
    }
    else if (data.weather[0].id == "711") {
        weatherIcon.src = " https://openweathermap.org/img/wn/50d@2x.png";
    }
    else {
        weatherIcon.src = " https://openweathermap.org/img/wn/50d@2x.png";
    }

}




searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value);
});
