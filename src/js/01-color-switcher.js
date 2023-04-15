import '../css/01-color-switcher.css';

const start = document.querySelector('[data-start]');
const stop = document.querySelector('[data-stop]');
let timerId = null;
stop.setAttribute('disabled', '');

const getRandomHexColor = () =>
  `#${Math.floor(Math.random() * 16777215).toString(16)}`;

const startSwitch = e => {
  start.toggleAttribute('disabled');
  stop.toggleAttribute('disabled');
  document.body.style.backgroundColor = getRandomHexColor();
  timerId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
};

start.addEventListener('click', startSwitch);

const stopSwitch = e => {
  clearInterval(timerId);
  start.toggleAttribute('disabled');
  stop.toggleAttribute('disabled');
};
stop.addEventListener('click', stopSwitch);
