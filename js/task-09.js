function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyRef = document.querySelector('body');
const buttonRef = document.querySelector('.change-color');
const spanColorRef = document.querySelector('.color');

const changeBackgroundColor = () => {
  const currentColor = getRandomHexColor()
  spanColorRef.textContent = currentColor;
  bodyRef.style.backgroundColor = currentColor;
}

buttonRef.addEventListener('click', changeBackgroundColor)
