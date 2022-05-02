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

// Faq section
const faqContainer = document.querySelector(".faq__row--list");
let bodyHeightList = [...faqContainer.querySelectorAll(".faq__body")].map(
  (body) => body.clientHeight
);

[...faqContainer.querySelectorAll("li .faq__header")].map((item) =>
  item.addEventListener("click", toggleFaq)
);
[...faqContainer.querySelectorAll(".faq__body")].map(
  (body) => (body.style.maxHeight = 0)
);

function toggleFaq(e) {
  let index = this.getAttribute("data-index");
  let parentLi = this.closest("li");

  if (!parentLi.classList.contains("active")) {
    parentLi.querySelector(".faq__body").style.maxHeight =
      bodyHeightList[index - 1] + 25 + "px";
  } else {
    parentLi.querySelector(".faq__body").style.maxHeight = 0 + "px";
  }

  parentLi.classList.toggle("active");

  console.log(bodyHeightList);
}
