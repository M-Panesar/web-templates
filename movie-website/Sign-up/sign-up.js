var email = document.forms['form']['email'];
var name = document.forms['form']['name'];
var password = document.forms['form']['password'];
var correct_password = document.forms['form']['coorect_password'];

var email_error = document.getElementById('email_error');
var name_error = document.getElementById('name_error');
var password_error = document.getElementById('password_error');
var correct_password_error = document.getElementById('correct_password_error');

email.addEventListener('textInput', email_Verify);
name.addEventListener('textInput', name_Verify);
password.addEventListener('textInput', password_Verify);
correct_password.addEventListener('textInput', correct_password_Verify);

function validated(){
    if(email.value.length < 9){
        email.style.border = "1px solid #22254b";
        email_error.style.display = "block";
        email.focus();
        return false; 
    }
    if(name.value.length < 23){
        name.style.border = "1px solid #22254b";
        name_error.style.display = "block";
        name.focus();
        return false; 
    }
    if(password.value.length < 6){
        password.style.border = "1px solid #22254b";
        password_error.style.display = "block";
        password.focus();
        return false; 
    }
    if(correct_password.value.length < 6){
        correct_password.style.border = "1px solid #22254b";
        correct_password_error.style.display = "block";
        correct_password.focus();
        return false; 
    }
}

function email_Verify(){
    if(email.value.length >= 8){
        email.style.border = "1px solid silver";
        email_error.style.display = "none";
        return true;
    }
}
function name_Verify(){
    if(name.value.length >= 22){
        name.style.border = "1px solid silver";
        name_error.style.display = "none";
        return true;
    }
}
function password_Verify(){
    if(password.value.length >= 5){
        password.style.border = "1px solid silver";
        password_error.style.display = "none";
        return true;
    }
}
function correct_password_Verify(){
    if(correct_password.value.length >= 5){
        correct_password.style.border = "1px solid silver";
        correct_password_error.style.display = "none";
        return true;
    }
}