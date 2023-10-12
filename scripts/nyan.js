const body = document.querySelector('body');
const activateClass = 'played';

const activedAnimation = () => {
  body.classList.add(activateClass);
}

const stopedAnimation = () => {
  body.classList.remove(activateClass);
}



document.addEventListener('DOMContentLoaded', function() {
  let root = document.querySelector('html');
  root.style.setProperty(`--window-width`, window.screen.width + 'px');
  let stars = document.querySelector('.stars');
  let star = document.querySelectorAll('.star');
  Array.prototype.forEach.call(star, (s) => {
    s.style.top = Math.random() * window.screen.height + 'px';
    s.style.left = Math.random() * window.screen.width + 'px';
    s.style.animationDelay = Math.random() + 's';
    const s2 = s.cloneNode(1);
    s2.style.left = parseInt(s2.style.left) + window.screen.width + 'px';
    stars.append(s2);
  });
});

export {activedAnimation, stopedAnimation};
