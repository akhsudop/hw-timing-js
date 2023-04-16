form = document.querySelector('.form');

const createPromise = (position, firstDelay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
      } else {
        // Reject
      }
    }, firstDelay);
  });
};

submit.addEventListener('submit', event => {
  event.preventDefault();
  createPromise(position, firstDelay)
    .then(({ position, firstDelay }) => {
      console.log(`✅ Fulfilled promise ${promiseNumber} in ${delay}ms`);
    })
    .catch(({ position, firstDelay }) => {
      console.log(`❌ Rejected promise ${promiseNumber} in ${delay}ms`);
    });
});
