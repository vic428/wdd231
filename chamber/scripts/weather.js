const apiKey = "2dbda7ee0023006f8c715d8422dbe049"; // Replace with your OpenWeather API key
const city = "Ikeja"; // Replace with your city
const forecastContainer = document.getElementById("forecast");

async function getForecast() {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=${apiKey}`
      );
      const data = await response.json();

      // Group by date (ignore time)
      const dailyTemps = {};
      data.list.forEach(item => {
        const date = item.dt_txt.split(" ")[0]; // "YYYY-MM-DD"
        if (!dailyTemps[date]) {
          dailyTemps[date] = [];
        }
        dailyTemps[date].push(item.main.temp);
      });

      // Get average temp for each day
      const dailyAverages = Object.entries(dailyTemps).map(([date, temps]) => {
        const avg = temps.reduce((a, b) => a + b, 0) / temps.length;
        return { date, temp: avg.toFixed(0) };
      });

      // Keep only next 3 days
      const next3Days = dailyAverages.slice(0, 3);

      // Format and render
      forecastContainer.innerHTML = "";
      next3Days.forEach((day, index) => {
        const date = new Date(day.date);
        const options = { weekday: "long" };
        const label = index === 0 ? "Today" : date.toLocaleDateString(undefined, options);
        forecastContainer.innerHTML += `<p>${label}: <strong>${day.temp}°F</strong></p>`;
      });
    } catch (error) {
      forecastContainer.innerHTML = `<p>Error loading forecast.</p>`;
      console.error(error);
    }
  }

  getForecast();

  //Select HTML elements in the document
const myTown = document.querySelector('#town');
const myDescription = document.querySelector('#description');
const myTemperature = document.querySelector('#temperature');
const myGraphic = document.querySelector('#graphic');

//Create variables for the url
const myKey = "2dbda7ee0023006f8c715d8422dbe049"
const myLat = "6.601835811228054"
const myLong = "3.351851134845131"

// Construct a full path using template literals
const myURL = `//api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}`

//Fetch current data
async function apiFetch() {
  try {
    const response = await fetch(myURL);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // testing only
      displayResults(data); // uncomment when ready
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}
// Display the JSON data onto my webpage
function displayResults(data){
    console.log('Hello')
    myTown.innerHTML = data.name
    myDescription.innerHTML = data.weather[0].description
    myTemperature.innerHTML = `${data.main.temp}&deg;F`
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    myGraphic.setAttribute('SRC', iconsrc)
    myGraphic.setAttribute('alt', data.weather[0].description)

}


//Start the process
apiFetch();