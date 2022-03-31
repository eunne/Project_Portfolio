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
    
    //메뉴버튼 클릭했을 대, 해당 페이지로 이동
    const navbarMenu = document.querySelector('.navbar__menu');
    navbarMenu.addEventListener('click', (event) => {
      //변수 정의한게 안으로 들어와야 하는구나.
      const navbarMenuActive = document.querySelector('.navbar__menu__item.active');
      navbarMenuActive.classList.remove('active');
      
      const target = event.target;
      const link = target.dataset.link;
      
      if (link == null) {
        return;
      } else {
        scrollIntoView(link);
        navbarMenu.classList.remove('active');
        target.classList.add('active');
      };
    
    const toggleBtn = document.querySelector(".navbar__toggleBtn");
    
    toggleBtn.addEventListener("click", () => {
      navbarMenu.classList.toggle("clicked");
    });
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
  
  // if( homeHeight/2 < window.scrollY ) {
  //   arrowBtn.classList.add('visible');
  // } else {
  //   arrowBtn.classList.remove('visible');
  // }
  
  if( homeHeight/2 < window.scrollY ) {
    arrowBtn.style.opacity = 1;
  } else {
    arrowBtn.style.opacity = 0;
  }
});
    
arrowBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
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
  const selected = document.querySelector('.category__btn.selected');
  selected.classList.remove('selected');
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


//스크롤 할 때 메뉴활성화버튼 움직이게 만들기
//1. 모든 섹션의 요소들과 메뉴아이템들을 가져온다.
//2. intersectionobserver를 이용해서 모든 섹션들을 관찰한다.
//3. 보여지는 섹션에 해당하는 메뉴 아이템을 활성화시킨다.


//1. 모든 섹션의 요소를 가져온다.
const sectionIds = ['#home', '#about', '#skills', '#work', '#testimonials','#contacts'];

//sectionIds를 돌면서 queryselector를 통해 id가 있는 section을 받아와 dom요소로 만든다.
//map은 dom요소로 만들어주는 기능을 한다.(큰 개념으로 만들어 주는 역할인가.)
const sections = sectionIds.map(id => document.querySelector(id));
console.log(sections);
// 0: section#home
// 1: section#about.section.section__container
// 2: section#skills.section
// 3: section#work.section
// 4: section#testimonials.section
// 5: section#contacts.section


//sectionIds를 돌면서 queryselector를 통해 navitem을 받아온다.
//sectionid에 해당하는 navitem을 불러오기 위해 navitem 요소들을 불러온다.
const navItems = sectionIds.map(id => document.querySelector(`[data-link="${id}"]`));
console.log(navItems);
// 0: li.navbar__menu__item.active
// 1: li.navbar__menu__item
// 2: li.navbar__menu__item
// 3: li.navbar__menu__item
// 4: li.navbar__menu__item
// 5: li.navbar__menu__item



//2. intersectionobserver로 모든 섹션들을 관찰한다.

let selectedNavItem = navItems[0];

const observerOption = {
  root: null,
  rootMargin: '0px',
  threshold: 0.3,
}

//2) 이 객체에는 배열을 돌면서 내용을 반환한다.
const observerCallback = (entries, observer) => {
  console.log(entries);
  console.log(observer);

  entries.forEach(entry => {

    // if(현재페이지를 나간다)
    if(!entry.isIntersecting) {
      //entry(target)와 일치하는 인덱스를 가져온다.
      const index = sectionIds.indexOf(`#${entry.target.id}`);
      console.log(index, entry.target.id);

      //위롤 스크롤링 될 때 (즉, 밑으로 내릴 때) = y좌표가 -일 경우
      //y좌표가 -일 경우에는 index+1이 된 navitem요소를 보여주고
      //y좌표가 +일 경우에는 index-1이 된 navitem요소를 보여준다.
      
      //섹션의 id의 인덱스를 가져온다.
      let selectedIndex;
      if(entry.boundingClientRect.y < 0) {
        selectedIndex = index + 1;
      } else {
        selectedIndex = index - 1;
      }
    
      //섹션 id의 인덱스와 일치하는 Navitem을 가져온다.
      //함수 밖에서 selctednavitem이란 요소를 기억했다가, 지워주고, 다시 호출해서, 더해준다.
      selectedNavItem.classList.remove('active');
      selectedNavItem = navItems[selectedIndex];
      selectedNavItem.classList.add('active');

    }
  });
};
//1) observer라는 객체를 만든다.(관찰자를 만든다.)
const observer = new IntersectionObserver(observerCallback, observerOption);


//3) 어떤 배열을 돌면서 어떤 내용을 반환할지 지정해준 것이다. (observer야 관찰해줘)
sections.forEach(section => observer.observe(section));