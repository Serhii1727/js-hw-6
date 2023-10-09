const formRef = document.querySelector('.login-form');

const makeSubmitForm = (event) => {
    event.preventDefault();
    const {email, password} = event.currentTarget
    if (!email.value || !password.value) {
        alert('Please fill out all fields')
        return;
    }
    const dataForm = {
        email: email.value,
        password: password.value,
    }

    console.log(dataForm);
    formRef.reset();
}

formRef.addEventListener('submit', makeSubmitForm);
