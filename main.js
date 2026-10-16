import "./platform-fonts.js";

// Your JavaScript goes here
// Handle submit button
const form = document.getElementById("nameAsker");

form?.addEventListener("submit", (e) => {
  e.preventDefault();
  const greeting = "שלום, ";

  const data = new FormData(e.target);

  const name = data.get("name");

  alert(greeting + name);
});

// Handle hamburger menu
const hamburger = document.querySelector(".header .hamburger");

const menu = document.getElementById("mobile-menu");

const closeButton = menu.querySelector(".menu-close");

const mobile = window.matchMedia("(max-width: 768px)");

hamburger.addEventListener("click", () => {
  const { top, left } = hamburger.getBoundingClientRect();

  menu.style.setProperty("--close-top", `${top}px`);

  menu.style.setProperty("--close-left", `${left}px`);

  menu.showModal();

  hamburger.setAttribute("aria-expanded", "true");

  document.body.classList.add("menu-open");
});

closeButton.addEventListener("click", () => {
  menu.close();
});

menu.addEventListener("close", () => {
  hamburger.setAttribute("aria-expanded", "false");

  document.body.classList.remove("menu-open");
});

mobile.addEventListener("change", () => {
  if (!mobile.matches && menu.open) menu.close();
});
