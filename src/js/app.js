import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWebp();

// Mobile menu script
document.body.onclick = (e) => {
  const menu = document.querySelector(".mobile__menu");

  if (e.target.classList.contains("mobile__menu--btn")) {
    e.preventDefault();
    menu.classList.add("opened");
    console.log(menu.classList);
  } else if (e.target.classList.contains("close__menu")) {
    e.preventDefault();
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

// Contact us form
// console.log(document.querySelector('.contact__us form'));
// [...document.querySelector('.contact__us form')].map(form => form.addEventListener('submit', function(e){
//   e.preventDefault();
//   const formData = new FormData(e.target);
//   const formProps = Object.fromEntries(formData);
//   console.log('no');
// }));

document.querySelector(".contact__us form").onsubmit = function (e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const formProps = Object.fromEntries(formData);
  let isEmail = String(formProps.email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

  if (formProps.email == "" || !isEmail) {
    this.classList.add("invalid");
  } else {
    this.classList.remove("invalid");
  }

  console.log(formProps);
};
