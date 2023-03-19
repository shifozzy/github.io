const burger = document.querySelector('.burger');
const burgerClose = document.querySelector('.close');
const menu = document.querySelector('.menu');
const tl = gsap.timeline({paused: true});

setTimeout(() => {
  gsap.to(".hero__title, .hero__btn", {y:50, opacity: 1, duration: 1, ease: 'circle'});
  gsap.to(".hero__descr", {opacity: 1, delay: 0.5, duration: 2.5, ease: 'circle'});
  gsap.to("#pict_one", {opacity: 1, scale: 0.9, delay: 0.8, duration: 0.5, ease: 'circle'});
  gsap.to("#pict_two", {opacity: 1, scale: 0.9, delay: 1, duration: 0.5, ease: 'circle'});
  gsap.to("#pict_three", {opacity: 1,scale: 0.9, delay: 1.2, duration: 0.5, ease: 'circle'});
  gsap.to(".photos__author", {opacity: 1, delay: 1.2, duration: 1.5, ease: 'circle'});
}, 1000);

tl
  .fromTo('.menu', {display: 'none', opacity: 0}, {display: 'block', opacity: 1, delay: 0.3, ease: 'circle'})
  .fromTo('.menu__top', {display: "none", opacity: 0}, {display: "block", opacity: 1, delay: 0.5, ease: 'expo', y: 0})
  .from(".menu__left", {y: 30, opacity: 0, delay: 0.2, duration: 0.2, ease: 'expo'})
  .from(".menu__right, .sub__menu", {y: 30, opacity: 0, delay: 0.3, duration: 0.3, ease: 'expo'})
  .from(".social", {y: 20, opacity: 0, delay: 0.4, duration: 0.4, ease: 'expo'});

  burger.addEventListener('click', () => {
    tl.play();
  });

  burgerClose.addEventListener('click', () => {
    tl.reverse();
  })
