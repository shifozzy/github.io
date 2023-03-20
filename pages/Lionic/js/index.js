let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = document.querySelectorAll('.nav__link');

burger.addEventListener('click', function () {

  burger.classList.toggle('burger--active');

  menu.classList.toggle('header__nav--active');

  document.body.classList.toggle('stop-scroll');

});

menuLinks.forEach(function (element) {
  element.addEventListener('click', function() {

    burger.classList.remove('burger--active');

    menu.classList.remove('header__nav--active');

    document.body.classList.remove('stop-scroll');

  });

});

  const btnMore = document.querySelector('.articles__btn');
  const articlesItems = document.querySelectorAll('.articles__item');

  btnMore.addEventListener('click', () => {

    articlesItems.forEach(el => {el.classList.add('articles__item--visible')});
    btnMore.closest('.articles__center').classList.add('articles__center--hidden');

  });

