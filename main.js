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

//
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {

  const target = event.target;
  const link = target.dataset.link;

  console.log(event.target.dataset.link);
  
  if (link == null) {
    return;
  } else {
    scrollIntoView(link);
  }
});


// handle click on 'contact me' btn on home 
const contactMe = document.querySelector(".home__contact");
contactMe.addEventListener('click', () => {
  scrollIntoView('#contacts');
});

// scrollintoview 함수만들기
function scrollIntoView(sector) {
  const scrollTo = document.querySelector(sector);
  scrollTo.scrollIntoView({behavior:"smooth"});
};