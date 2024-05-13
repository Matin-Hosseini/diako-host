const hamburgerMenu = document.getElementById("hamburger-menu");
const navMenu = document.getElementById("nav-menu");

//q-and-a accordion
const accordions = document.querySelectorAll(".accordion");

//click on nav links
const mainSections = document.querySelectorAll(".main-section");
const navLinks = document.querySelectorAll(".nav-menu__link");

//settings
const settingsBtn = document.querySelector(".settings");

//dark mode
const darkModeButton = document.querySelector("#dark-mode-btn");

//color palets
const colorPalets = document.querySelectorAll(".coller-pallets span");

//arrow up
const arrowUpBtn = document.querySelector(".arrow-up-btn");

//hamburger menu starts
let hamburgerMenuOpen = false;
hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("nav-hamburger-menu--open");
  hamburgerMenuOpen = !hamburgerMenuOpen;
  hamburgerMenuOpen
    ? (navMenu.style.height = `${navMenu.scrollHeight}px`)
    : (navMenu.style.height = "0");
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

//activates nav links on scroll and click on nav links starts
const activateLinksOnScroll = () => {
  mainSections.forEach((section) => {
    let top = window.scrollY;
    let offset = section.offsetTop;
    let height = section.offsetHeight;
    let id = section.getAttribute("id");

    if (top + 5 >= offset && top < offset + height) {
      navLinks.forEach((navLink) => {
        navLink.classList.remove("nav-menu__link--active");
        document
          .querySelector(`.nav-menu__link[href*="${id}"]`)
          .classList.add("nav-menu__link--active");
      });
    }
  });
};

// for each of the nav links in mobile mode, if one of them is clicked, closes nav menu
navLinks.forEach((navLink) => {
  navLink.addEventListener("click", () => {
    if (window.innerWidth < 768) {
      hamburgerMenuOpen = false;
      hamburgerMenu.classList.remove("nav-hamburger-menu--open");
      navMenu.style.height = "0";
    }
  });
});
//activates nav links on scroll and click on nav links ends

//settings starts
settingsBtn.addEventListener("click", (e) => {
  const { target } = e;
  console.log(target);
  settingsBtn.classList.toggle("open");
});
//settings ends

//dark mode starts
darkModeButton.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
  if (document.documentElement.classList.contains("dark")) {
    darkModeButton.classList.replace("bi-sun", "bi-moon");
    localStorage.setItem("theme", "dark");
  } else {
    darkModeButton.classList.replace("bi-moon", "bi-sun");
    localStorage.setItem("theme", "light");
  }
});

const setTheme = () => {
  const theme = localStorage.getItem("theme");
  if (!theme) return;
  document.documentElement.classList.add(theme);
  if (document.documentElement.classList.contains("dark")) {
    darkModeButton.classList.replace("bi-sun", "bi-moon");
  }
};
//dark mode ends

//color paletts starts
colorPalets.forEach((colorPalett) => {
  colorPalett.style.background = colorPalett.dataset.color;
  colorPalett.addEventListener("click", (e) => {
    localStorage.setItem("color-palette", e.target.dataset.color);
    document.documentElement.style.setProperty(
      "--primary-color",
      colorPalett.dataset.color
    );
  });
});

const setColorPalette = () => {
  const colorPalette = localStorage.getItem("color-palette");
  if (!colorPalette) return;
  document.documentElement.style.setProperty("--primary-color", colorPalette);
};

//color palets ends

//arrow up starts
arrowUpBtn.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
const showArrowUpBtn = () => {
  window.scrollY > window.innerHeight
    ? (arrowUpBtn.style.bottom = "2rem")
    : (arrowUpBtn.style.bottom = "-5rem");
};
//arrow up ends

window.addEventListener("load", () => {
  setTheme();
  setColorPalette();
  activateLinksOnScroll();
  showArrowUpBtn();
});

window.addEventListener("scroll", () => {
  showArrowUpBtn();
  activateLinksOnScroll();
});

//whtn testing for responsivness, if the screen gets bigger and nav menu is open after md media query nav menu height becomes normal
window.addEventListener("resize", () => {
  if (window.innerWidth >= 768) {
    navMenu.style.height = "auto";
  } else {
    navMenu.style.height = "0";
  }
});

document.onreadystatechange = function () {
  document.querySelector(".loader").classList.add("hide");
};
