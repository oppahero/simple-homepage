const body = document.querySelector("body");
const nav = document.querySelector(".nav__ul");
const menu = document.querySelector(".menu");
const close = document.querySelector(".close");
const toggleButton = document.querySelector(".mode");
const logo = document.querySelector(".logo img");
const moon = document.querySelector("#moon");
const sun = document.querySelector("#sun");

const sunMode = () => {
  sun.className = "mode--activate";
  moon.className = "";
  body.className = "";
};

const moonMode = () => {
  body.className = "dark";
  moon.className = "mode--activate";
  sun.className = "";
};

const showNav = () => {
    nav.style.transform = "translateX(0px)";
};

const closeNav = () => {
  nav.style.transform = "translateX(424px)";
};

menu.addEventListener("click", showNav);
close.addEventListener("click", closeNav);
sun.addEventListener("click", sunMode);
moon.addEventListener("click", moonMode);
