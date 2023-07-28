const hamburgerMenu = document.getElementById("hamburger-menu");
const mobileMenu = document.getElementById("mobile-menu");

//q-and-a accordion
const accordionsContainer = document.querySelector(".q-and-a__accordion");

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

//q-and-a accordion starts
accordionsContainer.addEventListener("click", (e) => {
  const { target } = e;
  const accordionDescription = document.querySelector(
    ".accordion__description"
  );
  console.log(target)
});
//q-and-a accordion ends
