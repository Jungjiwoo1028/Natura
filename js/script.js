"use strict";
/* ----------- Toggle Navbar ----------- */
const navToggler = document.querySelector(".header__toggle");
navToggler.addEventListener("click", () => {
  document.querySelector(".nav").classList.toggle("active");
  document.querySelector(".nav-inner").classList.toggle("opacity");
});

/* ----------- Navbar Scroll ----------- */
const header = document.querySelector(".nav-fix");

function scrollFunc() {
  if (pageYOffset >= 150) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
}

window.addEventListener("scroll", scrollFunc);
