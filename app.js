const button = document.getElementById('btn');
const weatherImg = document.getElementById('weather-img');
const cityName = document.getElementById('city-name');
const temperature = document.getElementById('temperature');
const condition = document.getElementById('condition');
const searchCity = document.getElementById('search-city');


button.addEventListener('click', function () {
    const city = searchCity.value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8df3b21cc788b4886e2ad46a31afea1c`)
        .then(res => res.json())
        .then(data => {
            const celsius = data.main.temp - 273.15;
            temperature.innerHTML = celsius.toFixed(2);
            cityName.innerHTML = data.name + ", " + data.sys.country;
            condition.innerHTML = data.weather[0].main;
            const iconImg = data.weather[0].icon;
            console.log(iconImg);
            weatherImg.src=`http://openweathermap.org/img/wn/${iconImg}@2x.png`
        })
        searchCity.value = '';
})
