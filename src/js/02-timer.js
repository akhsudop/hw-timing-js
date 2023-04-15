import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const startBtn = document.querySelector('[data-start]');
const daysDOM = document.querySelector('[data-days]');
const hoursDOM = document.querySelector('[data-hours]');
const minutesDOM = document.querySelector('[data-minutes]');
const secondsDOM = document.querySelector('[data-seconds]');
const input = document.querySelector('input');

// formating function for final result of sec/min/hr/d
const addLeadingZero = value => {
  return value.toString().padStart(2, '0');
};

const startTimer = () => {
  startBtn.disabled = true;
  input.disabled = true;
  let intervalId = setInterval(() => {
    let ms = fp.selectedDates[0].getTime() - Date.now();
    const days = Math.floor(ms / (24 * 60 * 60 * 1000));
    const hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((ms / (1000 * 60)) % 60);
    const seconds = Math.floor((ms / 1000) % 60);

    // rendering
    daysDOM.textContent = addLeadingZero(days);
    hoursDOM.textContent = addLeadingZero(hours);
    minutesDOM.textContent = addLeadingZero(minutes);
    secondsDOM.textContent = addLeadingZero(seconds);

    if (ms === 0) {
      clearInterval(intervalId);
    }
  }, 1000);
};

const fp = flatpickr('#datetime-picker', {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < Date.now()) {
      startBtn.disabled = true;
      Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      startBtn.disabled = false;
    }
  },
});

startBtn.addEventListener('click', startTimer);

// Styling

const timer = document.querySelector('.timer');
const fields = document.querySelectorAll('.field');
const values = document.querySelectorAll('.value');
const labels = document.querySelectorAll('.label');

timer.style.display = 'flex';
timer.style.gap = '25px';
fields.forEach(field => {
  field.style.display = 'flex';
  field.style.flexDirection = 'column';
});
values.forEach(value => {
  value.style.fontSize = '45px';
  value.style.textAlign = 'center';
});
labels.forEach(label => {
  label.style.textAlign = 'center';
});
