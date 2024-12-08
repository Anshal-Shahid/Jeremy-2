const cross =document.querySelector("nav .side-nav .cross")
const menu =document.querySelector("nav .nav-div .menu")
const side_nav=document.querySelector("nav .side-nav")


menu.addEventListener("click",()=>{
    side_nav.classList.remove("hide");
 
})

cross.addEventListener("click",()=>{
    side_nav.classList.add("hide");
 
})



