// SCROLL REVEAL
window.addEventListener("scroll", function(){
document.querySelectorAll(".reveal").forEach(el=>{
if(el.getBoundingClientRect().top < window.innerHeight - 100){
el.classList.add("active")
}
})
})

// MOBILE MENU
document.getElementById("mobile-menu")
.addEventListener("click",()=>{
document.querySelector(".nav-links")
.classList.toggle("active")
})

// POPUP
const popup=document.getElementById("popup-form")
document.querySelectorAll(".open-form").forEach(btn=>{
btn.addEventListener("click",()=>popup.style.display="flex")
})

document.querySelector(".close-btn")
.addEventListener("click",()=>popup.style.display="none")