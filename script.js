const body = document.querySelector("body");
const toggleButton = document.querySelector(".mode");
const logo = document.querySelector(".logo img");
const moon = document.querySelector("#moon");
const sun = document.querySelector("#sun");

// const toogleMode = () => {
//   logo.src = body.classList.contains("dark")
//     ? "./alarado-icon-homepage-dark-mode.svg"
//     : "./assets/alarado-icon-homepage.svg";
// };

const sunMode = () => {
  sun.className = "button-icon";
  moon.className = null;
  body.className = null;
};

const moonMode = () => {
  body.className = "dark"
  moon.className = "button-icon";
  sun.className = null;
};

// toogleMode();
// toggleButton.addEventListener("click", toogleMode);
sun.addEventListener("click", sunMode);
moon.addEventListener("click", moonMode);
