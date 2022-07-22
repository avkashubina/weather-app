let data = new Date();

let h3 = document.querySelector("#dataOne");

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
  "October",
  "November",
  "December"
];
let month = months[data.getMonth()];

let date = data.getDate();
h3.innerHTML = `${month} ${date}`;

let p = document.querySelector("#dataTwo");

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

let day = days[data.getDay()];
let hours = data.getHours();
let minutes = data.getMinutes();

p.innerHTML = `${day} ${hours}:${minutes}`;

///

/*function showText(event) {
  event.preventDefault();
  let text = document.querySelector("#text");
  let h1 = document.querySelector("#mainCity");
  h1.innerHTML = `${text.value}`;
}

let submitButton = document.querySelector("form");
submitButton.addEventListener("submit", showText);*/

function searchLocation(event) {
  event.preventDefault();
  let location = document.querySelector("#text");
  let apiKey = "370b3975f0a546c7a8755cf3240ff7fd";
  let city = `${location.value}`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemp);
}

let search = document.querySelector("form");
search.addEventListener("submit", searchLocation);

function showTemp(response) {
  let temp = document.querySelector("#temperature");
  temp.innerHTML = Math.round(response.data.main.temp);
  let text = document.querySelector("#mainCity");
  text.innerHTML = response.data.name;
}
