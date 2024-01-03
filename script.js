let apikey = "b716b2d9e0cacf46ea73350041e3e810";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric";
let searchInput = document.querySelector(".search input");
let searchbtn = document.querySelector(".search .search-btn");
let weatherIcon = document.querySelector(".weather-icon");

async function CheckWeather(city) {
  const response = await fetch(apiUrl + `&q=${city}` + `&appid=${apikey}`);
  var data = await response.json();
  console.log(data);
  console.log(data.weather[0].main);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML =
    Math.round(data.main.temp) + "<sup>°C</sup>";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";
  if (data.weather[0].main == "Clear") {
    weatherIcon.src = "images/clear.png";
  } else if (data.weather[0].main == "Clouds") {
    weatherIcon.src = "images/clouds.png";
  } else if (data.weather[0].main == "Drizzle") {
    weatherIcon.src = "images/drizzle.png";
  } else if (data.weather[0].main == "Mist") {
    weatherIcon.src = "images/mist.png";
  } else if (data.weather[0].main == "Rain") {
    weatherIcon.src = "images/rain.png";
  } else if (data.weather[0].main == "Snow") {
    weatherIcon.src = "images/snow.png";
  } else if (data.weather[0].main == "Haze") {
    weatherIcon.src = "images/haze.png";
  }
}
searchbtn.addEventListener("click", () => {
  CheckWeather(searchInput.value);
});
searchInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    searchbtn.click();
  }
});
