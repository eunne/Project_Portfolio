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


//버튼을 누르면 해당 페이지로 이동
const home = document.querySelector('#home');
const about = document.querySelector('#about');
const skillls = document.querySelector('#skills');
const work = document.querySelector('#work');
const tesimonials = document.querySelector('#testimonials');
const contact = document.querySelector('#contact');

home.addEventListener("click", () => {
  const rect = home.getBoundingClientRect();
  scrollTo(0,rect.y - navbarHeight);
});

about.addEventListener("click", () => {
  const rect = about.getBoundingClientRect();
  console.log(scrollTo(0,rect.y - navbarHeight));
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
    const scroll = document.querySelector(link);
    scroll.scrollIntoView({behavior:"smooth"});
  }
});