var mobileDropdown = document.querySelector('.inactive');
var hamburger = document.querySelector('.Header-links--mobile-hamburger');
var input = document.querySelector('#board');
hamburger.addEventListener('click', function () {
  mobileDropdown.classList.toggle('inactive');
});

function toggleColor() {
  input.classList.toggle('yellow');
}

input.addEventListener('click', toggleColor);
//# sourceMappingURL=index.js.map