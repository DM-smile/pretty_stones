"use strict"

// burger button
const icon = document.querySelector('.burger-button');
icon.addEventListener('click', function () {
   document.documentElement.classList.toggle('burger-open');
});
