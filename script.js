const data = [
  { city: "Enugu", temperature: 13, humidity: 84 },
  { city: "Lagos", temperature: 26, humidity: 79 },
  { city: "Abuja", temperature: 29, humidity: 58 },
  { city: "Jos", temperature: 8, humidity: 69 },
  { city: "Kano", temperature: 36, humidity: 42 },
];

var weatherIcon = document.querySelector("#weather-icon"),
  weatherText = document.querySelector("#weather-text"),
  temperatureValue = document.querySelectorAll(".temperature-value"),
  humidityValue = document.querySelector("#humidity-value"),
  city = document.querySelector("#city"),
  searchBox = document.querySelector("#city-name"),
  submitBtn = document.querySelector(".submit"),
  request;

function checkWeather(citySearched) {
  let result = data.find((entry) => entry.city.toLowerCase() == citySearched);

  if (result) {
    document.querySelector(".error").style.display = "none";
    document.querySelector(".middle-part").style.display = "flex";
    document.querySelector(".bottom-part").style.display = "flex";
    city.innerHTML = result.city;
    temperatureValue.forEach((temp) => (temp.innerHTML = result.temperature));
    humidityValue.innerHTML = result.humidity + "%";

    if (result.humidity >= 75) {
      weatherIcon.src = "./asset/rain.svg";
      weatherText.innerHTML = "Heavy Rains";
    } else if (result.humidity >= 60 && result.humidity <= 74) {
      weatherIcon.src = "./asset/cloud.svg";
      weatherText.innerHTML = "Broken clouds";
    } else if (result.humidity < 60) {
      weatherIcon.src = "./asset/clear.svg";
      weatherText.innerHTML = "Sunny";
    }
  } else {
    document.querySelector(".error").style.display = "flex";
    document.querySelector(".middle-part").style.display = "none";
    document.querySelector(".bottom-part").style.display = "none";
  }
}

submitBtn.addEventListener("click", () => {
  request = searchBox.value.trim().toLowerCase();
  if (request !== "") {
    checkWeather(request);
    searchBox.value = "";
  }
});
