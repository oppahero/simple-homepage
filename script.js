const body = document.querySelector("body");
const toggleButton = document.querySelector(".mode");
const logo = document.querySelector(".logo img");
const moon = document.querySelector("#moon");
const sun = document.querySelector("#sun");

const sunMode = () => {
  sun.className = "mode--activate";
  moon.className = null;
  body.className = null;
};

const moonMode = () => {
  body.className = "dark"
  moon.className = "mode--activate";
  sun.className = null;
};

// toogleMode();
// toggleButton.addEventListener("click", toogleMode);
sun.addEventListener("click", sunMode);
moon.addEventListener("click", moonMode);
