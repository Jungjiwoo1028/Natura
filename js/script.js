/* ----------- Toggle Navbar ----------- */
const navToggler = document.querySelector(".header__toggle");
navToggler.addEventListener("click", () => {
  toggleNavbar();
});
function toggleNavbar() {
  document.querySelector(".header").classList.toggle("active");
}
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
