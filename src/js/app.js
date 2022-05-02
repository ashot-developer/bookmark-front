import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWebp();

// Mobile menu script
document.body.onclick = (e) => {
  e.preventDefault();
  const menu = document.querySelector(".mobile__menu");

  if (e.target.classList.contains("mobile__menu--btn")) {
    menu.classList.add("opened");
    console.log(menu.classList);
  } else if (e.target.classList.contains("close__menu")) {
    menu.classList.remove("opened");
  }
};

// Features section tabs
const tabContainer = document.querySelector(".features__tabs");

[...tabContainer.querySelectorAll(".tab-item a")].map((tab) =>
  tab.addEventListener("click", changeTab)
);

function changeTab(e) {
  e.preventDefault();
  let tabNumber = this.getAttribute("data-tab");
  let tabId = this.getAttribute("href");

  tabContainer.querySelector(
    ".tab-indicator"
  ).style.left = `calc(calc(33.3%) * ${tabNumber})`;

  tabContainer
    .querySelectorAll(".tab-item a")
    .forEach((tab) => tab.classList.remove("active__tab"));

  this.classList.add("active__tab");

  tabContainer
    .querySelectorAll(".tab-content")
    .forEach((tabContent) => tabContent.classList.remove("active"));
  tabContainer.querySelector(tabId).classList.add("active");
}
