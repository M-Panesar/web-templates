
var email = document.getElementById('email');
var username = document.getElementById('name');
var password = document.getElementById('password');
var reTypePassword = document.getElementById('re-type-password');

var errorMessage =  document.querySelector(".error-message")
var button =  document.querySelector(".button")

button.addEventListener("click",password_Verify)

function password_Verify(){
    if(email.value === ""){
        errorMessage.innerHTML = "Email Not Filled"
        errorMessage.style.color = "red"
    }else if(username.value === ""){
        errorMessage.innerHTML = "Name Not Filled"
        errorMessage.style.color = "red"
    }else if(password.value < 5 || password.value > 30){
        errorMessage.innerHTML = "Password Should be between 5 and 30"
        errorMessage.style.color = "red"
    }else if(password.value !== reTypePassword.value){
        errorMessage.innerHTML = "Password Not Matched"
        errorMessage.style.color = "red"
    }else{
        errorMessage.innerHTML = "Signed Up"
        errorMessage.style.color = "green"
        
    }
}
