new WOW().init();
let navClick = document.querySelector(".menu-icon");
navClick.addEventListener("click", () => {
  navClick.classList.toggle("open")
});

let nav_header = document.querySelector("header")
let mobile_nav = document.querySelector(".navClick")

const toggleNavbar = () => {
  nav_header.classList.toggle("active");
}

navClick.addEventListener("click", () => toggleNavbar())