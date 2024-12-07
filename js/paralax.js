"use strict"

function addClass(findClass, addClass, speed = 1) {
   document.querySelectorAll(findClass).forEach(item => { item.style.transition = `${speed}s` })
   document.querySelectorAll(findClass).forEach(item => { item.classList.add(addClass) })
}

const options = {
   root: null,
   rootMargin: '0px',
   threshold: '0.25',
}

//! find class / add class / add speed transition
addClass('.item-present', 'par-left-on')
addClass('.header__body', 'par-static-on')
addClass('.hero__background', 'par-static-on', 3)
addClass('.title--hero', 'par-static-on')
addClass('.hero__text', 'par-static-on', 3)
addClass('.link-button--hero', 'par-static-on')
addClass('.title-label', 'par-static-on', 0.8)
addClass('.title--jewels', 'par-static-on', 3)
addClass('.title--handcrafted', 'par-static-on', 2)
addClass('.swiper-wrapper', 'par-static-on', 2)
addClass('.right-part-jewels__text', 'par-static-on', 3)
addClass('.right-part-jewels__photo', 'par-right-on', 0.8)
addClass('.left-part-jewels__photo', 'par-right-on', 0.8)
addClass('.title--popular-first', 'par-static-on', 2)
addClass('.title--popular-second', 'par-static-on', 2)
addClass('.sub-title', 'par-static-on', 3)
addClass('.handcrafted__photo', 'par-static-on', 2)
addClass('.handcrafted__text', 'par-left-on')
addClass('.footer__body', 'par-bottom-on')
//! =========================================== //


const paralaxLeft = document.querySelectorAll('.par-left-on')
const paralaxRight = document.querySelectorAll('.par-right-on')
const paralaxStatic = document.querySelectorAll('.par-static-on')
const paralaxBottom = document.querySelectorAll('.par-bottom-on')

const callbackLeft = function (entries, observer) {
   entries.forEach(entry => {
      if (entry.isIntersecting) {
         entry.target.classList.add('par-off')
         setTimeout(() => {
            entry.target.classList.remove('par-left-on')
            entry.target.classList.add('trans-off')
         }, 3000)
         if (entry.target.timerId) {
            clearTimeout(entry.target.timerId);
            entry.target.timerId = null;
         }
      } else {
         if (!entry.target.timerId) {
            entry.target.timerId = setTimeout(() => {
               entry.target.classList.remove('par-off')
               entry.target.classList.remove('trans-off')
               entry.target.classList.add('par-left-on')
               entry.target.timerId = null
            }, 10000)
         }
      }
   })
}
const callbackRight = function (entries, observer) {
   entries.forEach(entry => {
      if (entry.isIntersecting) {
         entry.target.classList.add('par-off')
         setTimeout(() => {
            entry.target.classList.remove('par-right-on')
            entry.target.classList.add('trans-off')
         }, 3000)
         if (entry.target.timerId) {
            clearTimeout(entry.target.timerId);
            entry.target.timerId = null;
         }
      } else {
         if (!entry.target.timerId) {
            entry.target.timerId = setTimeout(() => {
               entry.target.classList.remove('par-off')
               entry.target.classList.remove('trans-off')
               entry.target.classList.add('par-right-on')
               entry.target.timerId = null
            }, 10000)
         }
      }
   })
}
const callbackStatic = function (entries, observer) {
   entries.forEach(entry => {
      if (entry.isIntersecting) {
         entry.target.classList.add('par-off')
         setTimeout(() => {
            entry.target.classList.remove('par-static-on')
            entry.target.classList.add('trans-off')
         }, 3000)
         if (entry.target.timerId) {
            clearTimeout(entry.target.timerId);
            entry.target.timerId = null;
         }
      } else {
         if (!entry.target.timerId) {
            entry.target.timerId = setTimeout(() => {
               entry.target.classList.remove('par-off')
               entry.target.classList.remove('trans-off')
               entry.target.classList.add('par-static-on')
               entry.target.timerId = null
            }, 10000)
         }
      }
   })
}
const callbackBottom = function (entries, observer) {
   entries.forEach(entry => {
      if (entry.isIntersecting) {
         entry.target.classList.add('par-off')
         setTimeout(() => {
            entry.target.classList.remove('par-bottom-on')
            entry.target.classList.add('trans-off')
         }, 3000)
         if (entry.target.timerId) {
            clearTimeout(entry.target.timerId);
            entry.target.timerId = null;
         }
      } else {
         if (!entry.target.timerId) {
            entry.target.timerId = setTimeout(() => {
               entry.target.classList.remove('par-off')
               entry.target.classList.remove('trans-off')
               entry.target.classList.add('par-bottom-on')
               entry.target.timerId = null
            }, 10000)
         }
      }
   })
}

const observerLeft = new IntersectionObserver(callbackLeft, options)
const observerRight = new IntersectionObserver(callbackRight, options)
const observerStatic = new IntersectionObserver(callbackStatic, options)
const observerBottom = new IntersectionObserver(callbackBottom, options)
paralaxLeft.forEach(item => observerLeft.observe(item))
paralaxRight.forEach(item => observerRight.observe(item))
paralaxStatic.forEach(item => observerStatic.observe(item))
paralaxBottom.forEach(item => observerBottom.observe(item))


