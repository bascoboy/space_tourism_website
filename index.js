// Selects the HTML element with the class "navbar__hamberger-menu" and assigns it to the variable 'hambergerMenu'.
const hambergerMenu = document.querySelector(".navbar__hamberger-menu");

// Selects the HTML element with the class "overlay__hamberger-button" and assigns it to the variable 'overlayHambergerMenu'.
const overlayHambergerMenu = document.querySelector(".overlay__hamberger-button");

// Selects the HTML element with the class "overlay-menu" and assigns it to the variable 'overlayMenu'.
const overlayMenu = document.querySelector(".overlay-menu");

// Adds a 'click' event listener to the 'hambergerMenu' element.
hambergerMenu.addEventListener("click", function () {
  // Checks if the 'overlayMenu' element's top style is set to "-120vh".
  // This condition is incorrect because it uses assignment (=) instead of comparison (== or ===).
  if ((overlayMenu.style.top === "-120vh")) {
    // If the condition is true, sets the 'overlayMenu' element's top style to "0" (makes it visible).
    overlayMenu.style.top = "0";
  } else {
    // If the condition is false, sets the 'overlayMenu' element's top style to "100vh" (hides it).
    overlayMenu.style.top = "100vh";
  }
});

// Adds a 'click' event listener to the 'overlayHambergerMenu' element.
overlayHambergerMenu.addEventListener("click", function () {
  // Checks if the 'overlayMenu' element's top style is set to "0".
  // This condition is incorrect because it uses assignment (=) instead of comparison (== or ===).
  if ((overlayMenu.style.top = "0")) {
    // If the condition is true, sets the 'overlayMenu' element's top style to "-120vh" (hides it).
    overlayMenu.style.top = "-120vh";
  } else {
    // If the condition is false, sets the 'overlayMenu' element's top style to "0" (makes it visible).
    overlayMenu.style.top = "0";
  }
});
