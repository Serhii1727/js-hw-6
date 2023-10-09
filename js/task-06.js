const inputRef = document.querySelector('#validation-input');


const quantitySymbolsInInpnt = (event) => {
    if (event.currentTarget.value.length !== 6) {
        inputRef.classList.add('invalid');
        return
    }
    inputRef.classList.add('valid')
}


inputRef.addEventListener('blur', quantitySymbolsInInpnt)