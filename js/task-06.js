const inputRef = document.querySelector('#validation-input');


const handleInputBlur = (event) => {

    if (event.currentTarget.value.length !== 6) {
        inputRef.classList.add('invalid');
    }

    if (event.currentTarget.value.length === 6) {
        inputRef.classList.add('valid');
    }

    if (inputRef.classList.contains('invalid') && event.currentTarget.value.length === 6) {
        inputRef.classList.replace('invalid', "valid");
    }

    if (inputRef.classList.contains('valid') && event.currentTarget.value.length !== 6) {
        inputRef.classList.replace('valid', "invalid");
    }


}


inputRef.addEventListener('blur', handleInputBlur)