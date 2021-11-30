//UC1:User needs to valid name first.
const text = document.querySelector('#text');
const textError = document.querySelector('.text-error');
text.addEventListener('input',function(){
    let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
    if(nameRegex.test(text.value)){
        textError.textContent="";
    }else{
        textError.textContent="Name is Incorrect";
    }
});
//UC 2 Email validation.
const email = document.querySelector('#emailInput');
const errorEmail = document.querySelector('.email-error');
email.addEventListener('input',function(){
    //debugger;
    let emailRegex = RegExp('^[a-zA-Z0-9+_.-]+[@]{1}[a-zA-Z0-9]+[.a-z]{4}([.a-zA-Z]{3})*$');
    if(emailRegex.test(email.value)){
        errorEmail.textContent="";
    }else{
        errorEmail.textContent="Email is InValid";
    }
});
//UC3:Phone Validation.
const phone = document.querySelector('#tel');
const PhoneError = document.querySelector('.phone-error');
phone.addEventListener('input',function(){
    let phoneRegex = RegExp('^[1-9]{2}[0-9]{10}$');
    if(phoneRegex.test(phone.value)){
        PhoneError.textContent="";
    }else{
        PhoneError.textContent="Phone number is incorrect";
    }
});
//UC 4 & UC5 Password validation
const password = document.querySelector("#pwd");
const errPass = document.querySelector(".pwd-error");
password.addEventListener('input',function(){
    let passRegex = RegExp("^([!@#$%^&*()]?[A-Z,a-z,0-9]+){8,}$");
    if(passRegex.test(password.value)){
        errPass.textContent="";
    }else{
        errPass.textContent="Password is incorrect";
    }
});