/*Burger menu*/
let burger = document.querySelector('.header__burger');
let burgerActive = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = document.querySelectorAll('.header__link');
let headerUnlock = document.querySelector('.header');

burger.addEventListener('click', function(){
  menu.classList.toggle('header__nav--active');
  document.body.classList.toggle('stop-scroll');
  headerUnlock.classList.remove('stop-scroll');
})

burgerActive.addEventListener('click', function(){
  menu.classList.remove('header__nav--active');
  document.body.classList.remove('stop-scroll');
  headerUnlock.classList.add('stop-scroll');
})

menuLinks.forEach(function (element) {
  element.addEventListener('click', function() {
    burger.classList.remove('header__burger--active');
    menu.classList.remove('header__nav--active');
    document.body.classList.remove('stop-scroll');
    headerUnlock.classList.add('stop-scroll');
  })
})
/*Search form*/
let searchBtn = document.querySelector('.header__btn');
let resetBtn = document.querySelector('.search__reset');
let searchForm = document.querySelector('.header__search-form');

searchBtn.addEventListener('click', function() {
  searchForm.classList.toggle('header__search-form--active');
})

resetBtn.addEventListener('click', function() {
  searchForm.classList.toggle('header__search-form--active');
})
/*Tabs*/
let tabsBtn = document.querySelectorAll('.item__btn');
let tabsDescr = document.querySelectorAll('.work__description-wrapper');
let tabsImg = document.querySelectorAll('.work__img');

  tabsBtn.forEach(function(element){
    element.addEventListener('click', function(e){
      const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function(btn){btn.classList.remove('work__item--active');
      })
      e.currentTarget.classList.add('work__item--active');

    tabsImg.forEach(function(element){element.classList.remove('work__img--active');
      })
      document.querySelector(`[data-img="${path}"]`).classList.add('work__img--active');

    tabsDescr.forEach(function(element){element.classList.remove('work__description--active');
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('work__description--active');
    })
  })
  /*swiperSlider*/
  const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 50,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    autoplay: {
      delay: 5000,
    },
  });
  /*Accordion*/
  new Accordion('.accordion-list', {
    elementClass: 'accordion',
    triggerClass: 'accordion__control',
    panelClass: 'accordion__content',
    activeClass: 'accordion--active'
  });


