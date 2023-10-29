let btnClick = document.querySelector(".menu-icon");
btnClick.addEventListener("click", () => {
  btnClick.classList.toggle("open")
});

let nav_header = document.querySelector("header")
let mobile_nav = document.querySelector(".btnClick")

const toggleNavbar = () => {
  nav_header.classList.toggle("active");
}

btnClick.addEventListener("click", () => toggleNavbar())