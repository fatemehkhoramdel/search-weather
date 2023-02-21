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


function showCity(event){
  event.preventDefault();
  let city = document.querySelector("#city-name");
  let cityName = document.querySelector("#city-input");
  city.innerHTML = cityName.value;
}

let heading = document.querySelector("#date-link");
heading.innerHTML= formatDate(days, months);
console.log(formatDate(days, months));
let city = document.querySelector("#search-form");
city.addEventListener("submit", showCity);


