function displayTemperature(response) {
  console.log(response.data.main.temp);
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
}

let apiKey = "b5b3a26b2b84af69bb9f76f3d9b2d652";
let apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?q=New York,usa&appid=b5b3a26b2b84af69bb9f76f3d9b2d652&units=metric";

axios.get(apiUrl).then(displayTemperature);
