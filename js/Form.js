const text = document.querySelector('#text');
const textError = document.querySelector('.text-error');
text.addEventListener('input', function(){
    let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
    if(nameRegex.test(text.value))
        textError.textContent = "";
    else 
        textError.textContent = "Name is Incorrect";
});

const salary = document.querySelector('#salary');
const output = document.querySelector('.salary-output');
output.textContent = salary.value;
salary.addEventListener('input', function(){
    output.textContent = salary.value;
});

const email = document.querySelector('#email');
const emailError = document.querySelector('.email-error');
email.addEventListener('input', function(){
    let emailRegex = RegExp("^[a-z]{1,}[a-z0-9]*[-.+]{0,1}[a-z0-9]+[@]{1}([a-z0-9]+)(\\.[a-z]{2,}){1,2}$");
    if(emailRegex.test(email.value))
        emailError.textContent = "";
    else 
        emailError.textContent = "Email is Incorrect";
});

const tel = document.querySelector('#tel');
const telError = document.querySelector('.tel-error');
tel.addEventListener('input', function(){
    let telRegex = RegExp("^[1-9]{1}[0-9]{0,3}\\s[1-9]{1}[0-9]{9}$");
    if(telRegex.test(tel.value))
        telError.textContent = "";
    else 
        telError.textContent = "PhoneNumber is Incorrect";
});

const password = document.querySelector('#pwd');
const pwdError = document.querySelector('.pwd-error');
password.addEventListener('input', function(){
    let passwordRegex = RegExp('^(?=.*[A-Z])(?=.*[0-9])(?=[\\w]*[\\W][\\w]*$)[A-Za-z1-9.@!#$&%^*]{8,}$');
    if(passwordRegex.test(password.value))
        pwdError.textContent = "";
    else 
        pwdError.textContent = "Minimum 8 characters";
});
