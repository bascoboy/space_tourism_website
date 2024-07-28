const hambergerMenu = document.querySelector(".navbar__hamberger-menu");
const overlayHambergerMenu = document.querySelector(".overlay__hamberger-button");
const overlayMenu = document.querySelector(".overlay-menu");

hambergerMenu.addEventListener("click", function () {
  if ((overlayMenu.style.top = "-120vh")) {
    overlayMenu.style.top = "0";
  } else {
    overlayMenu.style.top = "100vh";
  }
});

overlayHambergerMenu.addEventListener("click", function () {
  if ((overlayMenu.style.top = "0")) {
    overlayMenu.style.top = "-120vh";
  } else {
    overlayMenu.style.top = "0";
  }
});
