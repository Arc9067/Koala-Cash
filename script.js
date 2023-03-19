const navList = document.querySelector(".nav-list");
const mobileNav = document.querySelector(".mobile-nav");
const closeNav = document.querySelector(".close-nav");
const mobileList = document.querySelectorAll(".mobile-list");
const mainPage = document.querySelector("main");
const loadingSection = document.querySelector(".loading");

navList.addEventListener("click", () => {
  mobileNav.style.right = 0;
});
mainPage.addEventListener("click", () => {
  if (mobileNav) {
    mobileNav.style.right = "-100%";
  }
});

closeNav.addEventListener("click", () => {
  mobileNav.style.right = "-100%";
});

mobileList.forEach((ele) => {
  ele.addEventListener("click", () => {
    mobileNav.style.right = "-100%";
  });
});

window.addEventListener("load", () => {
  loadingSection.style.display = "none";
});
