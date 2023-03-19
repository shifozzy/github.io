const tl = gsap.timeline({paused: true});

setTimeout(() => {
  gsap.fromTo('.header__container', {opacity: 0}, {opacity: 1, delay: 0.3, ease: 'expo'});
  gsap.fromTo('.main__title', {opacity: 0}, {opacity: 1, delay: 0.5, ease: 'expo'});
  gsap.fromTo('.main__item', {opacity: 0}, {opacity: 1, delay: 1.3, duration: 0.5, ease: 'expo'});
}, 1000);