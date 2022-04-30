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
