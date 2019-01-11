const mobileDropdown = document.querySelector(".inactive");
const hamburger = document.querySelector(".Header-links--mobile-hamburger");


hamburger.addEventListener("click", function () {
  mobileDropdown.classList.toggle("inactive");
});
