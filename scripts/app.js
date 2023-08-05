const hamburgerMenu = document.getElementById("hamburger-menu");
const mobileMenu = document.getElementById("mobile-menu");

//q-and-a accordion
const accordions = document.querySelectorAll(".accordion");

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
accordions.forEach((accordion, index) => {
  const header = accordion.querySelector(".accordion__head");

  header.addEventListener("click", () => {
    accordion.classList.toggle("active");

    const description = accordion.querySelector(".accordion__description");
    if (accordion.classList.contains("active")) {
      description.style.height = `${description.scrollHeight}px`;
      accordion.querySelector("svg").classList.replace("fa-plus", "fa-minus");
    } else {
      description.style.height = `0px`;
      accordion.querySelector("svg").classList.replace("fa-minus", "fa-plus");
    }
    removeOpen(index);
  });
});

const removeOpen = (accordionIndex) => {
  accordions.forEach((accordion, index) => {
    if (accordionIndex !== index) {
      accordion.classList.remove("active");
      const description = accordion.querySelector(".accordion__description");
      description.style.height = "0px";
      accordion.querySelector("svg").classList.replace("fa-minus", "fa-plus");
    }
  });
};

//q-and-a accordion ends
