const form = document.getElementById('myForm');
const inputField = document.querySelectorAll('input');
const firstnameInput = document.getElementById('firstName')
const lastnameInput = document.getElementById('lastName')
const emailInput = document.getElementById('emailAddress')
const passwordInput = document.getElementById('password')
const btnClaim = document.getElementById('btncl')


form.addEventListener('submit', function(event) {

    event.preventDefault();

    // Get the values of input fields
    const firstName = firstnameInput.value.trim();
    const lastName = lastnameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();

    if(firstName == '') {
        firstnameInput.classList.add('has-error');
    }
    if(lastName == '') {
        lastnameInput.classList.add('has-error');
    }
    if(emailValue == '') {
        emailInput.classList.add('has-error');
    } 
    if(passwordValue == '') {
        passwordInput.classList.add("has-error");
    } 
    if(firstName != '') {
        firstnameInput.classList.remove('has-error');
    }
    if(lastName != '') {
        lastnameInput.classList.remove('has-error');
        
    }
    if(emailValue != '') {
        emailInput.classList.remove('has-error');
    }
    if(passwordValue != '') {
        passwordInput.classList.remove('has-error');
    }
  
    
    
});


