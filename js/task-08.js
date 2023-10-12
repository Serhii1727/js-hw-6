const formRef = document.querySelector('.login-form');

const handleFormSubmit = (event) => {
    event.preventDefault();
    console.dir(event.currentTarget)
    const {email, password} = event.currentTarget.elements
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

formRef.addEventListener('submit', handleFormSubmit);
