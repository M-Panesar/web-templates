
const aboutSection = document.querySelector(".about-section");

const membershipSection = document.querySelector(".membership")

window.addEventListener("scroll",()=>{
    if(aboutSection.getBoundingClientRect().top < window.innerHeight){
        aboutSection.style.opacity="1";
        aboutSection.style.transition="1s";
        aboutSection.style.transform="skewY(.9deg)";
    }else{
        aboutSection.style.opacity=".1";
    }
})

window.addEventListener("scroll",()=>{
    if(membershipSection.getBoundingClientRect().top < window.innerHeight){
        membershipSection.style.opacity="1";
        membershipSection.style.transition="2s";
 }else{
    membershipSection.style.opacity=".1"; 
 }
})