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
function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({behavior:"smooth"});
};

//fade out home when scrolling
const homeContainer = document.querySelector('.home__container'); //html에서 요소 불러오기
const homeHeight = homeContainer.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
  //스크롤링 될 때마다 투명도가 변하도록 공식을 설정
  homeContainer.style.opacity = (1 - window.scrollY/homeHeight); //css style을 바꿔주니 style이란 함수 넣기
});

//arrow btn
const arrowBtn = document.querySelector('.arrowBtn');

document.addEventListener('scroll', () => {

  if( homeHeight/2 < window.scrollY ) {
    arrowBtn.classList.add('visible');
  } else {
    arrowBtn.classList.remove('visible');
  }

  // if( homeHeight/2 < window.scrollY ) {
  //   arrowBtn.style.opacity = 1;
  // } else {
  //   arrowBtn.style.opacity = 0;
  // }
})

arrowBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
});