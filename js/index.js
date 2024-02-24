// ---------------------------------------------------------------------------------------------------
// sorry teacher if i use javascript. Because i use my own design and i need to add my functionality 🙆 |
// ---------------------------------------------------------------------------------------------------

const hamburger = document.querySelectorAll("#hamburger");
const navbar = document.querySelectorAll("#nav");
const link = document.querySelectorAll("#nav a");
const btnSubmit = document.getElementById("btn");

hamburger.forEach((ham) => {
  ham.addEventListener("click", () => {
    navbar.forEach((nav) => {
      nav.classList.toggle("my-navbar");
    });
  });
});

link.forEach((li) => {
  li.addEventListener("click", () => {
    navbar.forEach((nav) => {
      nav.classList.toggle("my-navbar");
    });
  });
});

btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  alert("Submit");
});
