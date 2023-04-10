const updateCounter = (number) => {
  const valueElm = document.querySelector('.counter__value'); // tečka
  valueElm.textContent = String(number).padStart(2, '0'); // number
};

let value = 0;
const btnUp = document.querySelector('.counter__up'); // tečka
const btnDown = document.querySelector('.counter__down'); //tečka

btnUp.addEventListener('click', () => {
  if (value < 99) {   // value špatně napsáno
    value = value + 1;    //value
    updateCounter(value);  //  updateCountr
  }
});

btnDown.addEventListener('click', () => {
  if (value > 0) { // velue
    value = value - 1; // velue
    updateCounter(value);  //  updateCountr
  }
});

updateCounter(value);





