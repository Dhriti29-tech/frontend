const cityInput = document.getElementById("cityInput");
const getWeatherBtn = document.getElementById("getWeatherBtn");
const result = document.getElementById("result");
const errorBox = document.getElementById("error");

getWeatherBtn.addEventListener("click", async () => {
  const city = cityInput.value.trim(); // User ne jo city type ki hai

  if (city === "") {
    errorBox.textContent = "Please enter a city name.";
    result.innerHTML = "";
    return;
  }
  result.innerHTML = "Loading...";
  errorBox.textContent = "";

  try {
    const url = await fetch("https://open-meteo.com/")
    const data = await url.json();

    if (data.cod != 200) {
      throw new Error(data.message);
    }

    result.innerHTML = `
      <h3>${data.name}</h3>
      <p>Temperature: ${data.main.temp}°C</p>
      <p>Humidity: ${data.main.humidity}%</p>
      <p>Condition: ${data.weather[0].description}</p>
    `;
  } catch (err) {
    errorBox.textContent = err.message;
    result.innerHTML = "";
  }
});
