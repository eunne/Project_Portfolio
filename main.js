'use strict';



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
      
      if (link == null) {
        return;
      } else {
        scrollIntoView(link);
        navbarMenu.classList.remove('active');
      }
    });
    
    const toggleBtn = document.querySelector(".navbar__toggleBtn");
    
    toggleBtn.addEventListener("click", () => {
      navbarMenu.classList.toggle("active");
    });


// handle click on 'contact me' btn on home 
const contactMe = document.querySelector(".home__contact");
contactMe.addEventListener('click', () => {
  scrollIntoView('#contacts');
});

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
});
    
arrowBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
});

//project filtering
const workCategories = document.querySelector('.work__categories');
const workProjects = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');

workCategories.addEventListener('click', (event) => {
  //버튼을 누르면 반환되는 각 filter값을 가져옴
  const filter = event.target.dataset.filter || event.target.parentNode.dataset.filter;
  if (filter == null) {
    return;
  }
  
  // remove selection from the previous item and select the new
  const active = document.querySelector('.category__btn.selected');
  active.classList.remove('selected');
  const target = event.target.nodeName === 'BUTTON' ? event.target : event.target.parentNode;
  console.log(event.target);
  target.classList.add('selected');
  
  // const categoryBtns = document.querySelectorAll('.category__btn');
  // categoryBtns.forEach((category) => {
  //   filter === category.dataset.filter ? category.classList.add('selected') : category.classList.remove('selected')
  // });

  
  //애니메이션은 각 프로젝트를 담고있는 상자에다가 줌
  workProjects.classList.add('anime-out');
  setTimeout(() => {
    projects.forEach((project) => {
      //각 프로젝트의 filter값을 가져옴
      // console.log(project.dataset.filter);
      
      if (filter === '*' || filter === project.dataset.filter) {
        project.classList.remove('invisible');
        
      } else {
        project.classList.add('invisible')
      }
      
    workProjects.classList.remove('anime-out');
    });
    
  }, 300);

});


// scrollintoview 함수만들기
function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({behavior:"smooth"});
};