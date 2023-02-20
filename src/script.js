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

let heading = document.querySelector("#date-link");
heading.innerHTML(formatDate(days, months));
console.log(formatDate(days, months));
