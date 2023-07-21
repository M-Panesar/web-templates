
var email = document.getElementById('email');
var password = document.getElementById('password');

var errorMessage =  document.querySelector(".error-message")
var button =  document.querySelector(".button")

button.addEventListener("click",password_Verify)

function password_Verify(){
    if(email.value === ""){
        errorMessage.innerHTML = "Email Not Filled"
        errorMessage.style.color = "red"
    }else if(password.value < 5 || password.value > 30){
        errorMessage.innerHTML = "Password not Matched"
        errorMessage.style.color = "red"
    }else{
        errorMessage.innerHTML = "Logged-in"
        errorMessage.style.color = "green"   
    }
}
