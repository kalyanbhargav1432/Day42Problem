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
const emailError = document.querySelector('.email-error');
email.addEventListener('input',function(){
    //debugger;
    let emailRegex = RegExp('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$');
    if(emailRegex.test(email.value)){
        emailError.textContent="";
    }else{
        emailError.textContent="Email is InValid";
    }
});