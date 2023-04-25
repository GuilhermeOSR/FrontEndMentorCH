const inputEmail = document.getElementById('emailInput');
const btnNotify = document.getElementById('notify');
const hasError = document.getElementById('error-div');

btnNotify.addEventListener('click', () => {
    const email = inputEmail.value; 
    if(email === '') {
        hasError.classList.remove('hide');
        inputEmail.style.borderColor = 'hsl(354, 100%, 66%)';
    }

    if(email != '') {
        hasError.classList.add('hide');
        inputEmail.style.borderColor = 'hsl(0, 0%, 59%)';
    }
})