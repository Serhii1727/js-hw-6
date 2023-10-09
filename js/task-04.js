const valueRef = document.querySelector('#value');
const buttonDecrementRef = document.querySelector('button[data-action="decrement"]');
const buttonIncrementRef = document.querySelector('button[data-action="increment"]');

let counterValue = 0;

const decrementValue = () => {
    counterValue -= 1;
    valueRef.textContent = counterValue;
};

const incrementValue = () => {
    counterValue += 1;
    valueRef.textContent = counterValue;
}

buttonDecrementRef.addEventListener('click', decrementValue);
buttonIncrementRef.addEventListener('click', incrementValue);