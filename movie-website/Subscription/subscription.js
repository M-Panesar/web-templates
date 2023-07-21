const membershipButton = document.querySelector("#button")
const membershipBox = document.querySelector(".membership-box")

membershipBox.addEventListener("click",hoverbutton)
    

function hoverbutton(){
    
    const allMembershipButton = document.querySelectorAll("#button")
    const allMembershipBox = document.querySelectorAll(".membership-box")
    

    for(let i = 0 ; i < allMembershipButton.length ; i++){
        // membershipButton[i].style.backgroundColor = "red"
         console.log(allMembershipButton[i])
         console.log([i])
    }
}

