let days = ["Sun", "Mon", "Tue", "Wen", "Thu", "Fri", "Sat"];
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "Octuber",
  "November",
  "December",
];
let dateType = new Date();
let month = dateType.getMonth();


function formatDate(days, months) {
  let dateTime = new Date();
  return ` ${days[dateTime.getDay()]},${
    months[month]
  } ${dateTime.getDate()}, ${dateTime.getFullYear()} ${dateTime.getHours()} : ${dateTime.getMinutes()}`;
}

// function countryFullName(response){
//   console.log(response);
// }

function showTemp(response){
 console.log(response);
  let countryID = response.data.sys.country;
  const regionNames = new Intl.DisplayNames(
    ['en'], {type: 'region'}
  );
  
  console.log(regionNames.of(countryID)); 
  let description = document.querySelector("#description");
  description.innerHTML = response.data.weather[0].main;

}

function showCity(event){
  event.preventDefault();
  let city = document.querySelector("#city-name");
  let cityName = document.querySelector("#city-input");
  let apiKey = "a2d5c141caa760021e618a903bcc320b";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=${apiKey}`;
  city.innerHTML = cityName.value;
  axios.get(apiUrl).then(showTemp);
}

let heading = document.querySelector("#date-link");
heading.innerHTML= formatDate(days, months);
console.log(formatDate(days, months));
let city = document.querySelector("#search-form");
city.addEventListener("submit", showCity);




