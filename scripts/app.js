import {activedAnimation, stopedAnimation} from './nyan.js'

const form = document.querySelector('.form');
const numberShow = document.querySelector('.number-show');
const minInput = document.querySelector('.field-min');
const maxInput = document.querySelector('.field-max');

function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function updateNumberShow() {
  const min = parseInt(minInput.value, 10);
  const max = parseInt(maxInput.value, 10);
  const randomNumber = getRandomNumber(min, max);
  numberShow.textContent = randomNumber;
}

form.addEventListener('submit', function (event) {
  event.preventDefault();
  activedAnimation();

  setTimeout(() => {
    updateNumberShow();
    stopedAnimation();
  }, 5000);
});
