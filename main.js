'use strict';

const toggleBtn = document.querySelector(".navbar__toggleBtn");
const menu = document.querySelector(".navbar__menu");

toggleBtn.addEventListener("click", () => {
  toggleBtn.classList.toggle("clicked");
  menu.classList.toggle("active");
})


// 스크롤 시 navbar 색상 바꾸기
const navbar = document.querySelector("#navbar"); //from HTML
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  //navbar의 높이가 현재까지 스크롤 된 Y값보다 작다면 navbar에 fixed라는 클래스를 넣어라.
  navbarHeight < scrollY ? navbar.classList.add("fixed") : navbar.classList.remove("fixed");
  
  // if (scrollY > navbarHeight) {
  //   navbar.classList.add("fixed");
  // } else {
  //   navbar.classList.remove("fixed");
  // }
});