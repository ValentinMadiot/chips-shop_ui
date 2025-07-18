/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav__menu"),
  navToggle = document.getElementById("nav__toggle"),
  navClose = document.getElementById("nav__close");

// Menu Show
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show__menu");
  });
}

// Menu Hidden
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show__menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  navMenu.classList.remove("show__menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== SHADOW HEADER ===============*/
const shadowHeader = () => {
  const header = document.getElementById("header");
  this.scrollY >= 50
    ? header.classList.add("shadow__header")
    : header.classList.remove("shadow__header");
};
window.addEventListener("scroll", shadowHeader);

/*=============== SWIPER FAVORITES ===============*/
const swiperFavorites = new Swiper(".favorite__swiper", {
  loop: true,
  grabCursor: true,
  slidesPerView: "auto",
  centeredSlides: "auto",
});

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById("scrollup");
  this.scrollY >= 350
    ? scrollUp.classList.add("show__scroll")
    : scrollUp.classList.remove("show__scroll");
};
window.addEventListener("scroll", scrollUp);

/* ========== SCROLL SECTIONS ACTIVE LINKS ========== */
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]"
      );

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active__link");
    } else {
      sectionsClass.classList.remove("active__link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 300,
  // rest: true //Animation repeat
});

sr.reveal(`.home__data, .favorite__container, .footer__container`);
sr.reveal(`.home__circle, .home__img`, { delay: 600, scale: 0.5 });
sr.reveal(`.home__chips-1, .home__chips-2, .home__chips-3`, {
  delay: 1000,
  interval: 100,
});
sr.reveal(`.home__leaf`, { delay: 1200 });
sr.reveal(`.home__tomato-1, .home__tomato-2`, { delay: 1000, interval: 100 });
sr.reveal(`.care__img, .contact__img`, { origin: "left" });
sr.reveal(`.care__list, .contact__data`, { origin: "right" });
sr.reveal(`.banner__item, .products__card`, { interval: 100 });
