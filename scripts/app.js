const hamburgerMenu = document.getElementById("hamburger-menu");
const mobileMenu = document.getElementById("mobile-menu");

//hamburger menu starts
let hamburgerMenuOpen = false;
hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("nav-hamburger-menu--open");
  hamburgerMenuOpen = !hamburgerMenuOpen;
  hamburgerMenuOpen
    ? (mobileMenu.style.height = `${mobileMenu.scrollHeight}px`)
    : (mobileMenu.style.height = "0");
});
//hamburger menu ends
