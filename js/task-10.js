function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const refs = {
  inputRef: document.querySelector('input'),
  buttonCreate: document.querySelector('button[data-create="create"]'),
  buttonDestroy: document.querySelector('button[data-destroy="destroy"]'),
  divBoxesRef: document.querySelector('#boxes'),
}

 let amount = 0;

const handleInput = (event) => {
  amount = Number(event.currentTarget.value)  
}

const createBoxes = (amount) => {
  
  let markup;
  let currentNumber = 1;
  let currentPx = 30;
  
  for (let i = 1; i <= amount; i += 1) {

    const color = getRandomHexColor()

    if (i === currentNumber) {

      markup = `<div style='background-color:${color}; width:${currentPx}px; height:${currentPx}px;'></div>`

    } else {
      currentPx += 10;
      markup += `<div style='background-color:${color}; width:${currentPx}px; height:${currentPx}px;'></div>`} 
  }
  
  refs.divBoxesRef.innerHTML = markup;
}

const removeBoxes = () => {
  refs.divBoxesRef.innerHTML = '';
  refs.inputRef.value = '';
}


refs.inputRef.addEventListener('input', handleInput);
refs.buttonCreate.addEventListener('click', () => {
  createBoxes(amount)
})
refs.buttonDestroy.addEventListener('click', removeBoxes)
