 const play = document.querySelector(".play");
 const bigContainer = document.querySelector(".big-trailer");
 const cancel = document.querySelector(".cancel");

 play.addEventListener("click", ()=>{
     bigContainer.style.display = "block"
 })
 cancel.addEventListener("click",()=>{
    bigContainer.style.display = "none"
 })