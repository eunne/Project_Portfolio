const toggleBtn = document.querySelector(".navbar__toggleBtn");
const menu = document.querySelector(".navbar__menu");

toggleBtn.addEventListener("click", () => {
  toggleBtn.classList.toggle("clicked");
  menu.classList.toggle("active");
})