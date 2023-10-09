const inputRef = document.querySelector('#name-input');

let nameRef = document.querySelector('#name-output');

const changeName = (event) => {
    nameRef.textContent = event.currentTarget.value;
    if (!event.currentTarget.value) {
        nameRef.textContent = "Anonymous";
        return;
    } 
    nameRef.textContent = event.currentTarget.value;
}

inputRef.addEventListener('input', changeName);