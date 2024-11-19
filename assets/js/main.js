const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("nav ul");

//Toggle the menu when the hamburger is clicked
hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  hamburger.classList.toggle("active");
});

const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    hamburger.classList.remove("active");
  });
});
