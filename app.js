


const bodyContent = document.getElementById("bodyWrapper");
const burgerOn = document.getElementById("burger");
const burgerClose = document.getElementById("burgerClose");
const burgerContent = document.getElementById("burgerContent");


burgerOn.addEventListener("click", (e)=>{
    bodyContent.style.display = "none";
    burgerOn.style.display = "none";
    burgerClose.style.display = "block";
    burgerContent.style.display = "block";
})

burgerClose.addEventListener("click", (e)=>{
    burgerOn.style.display = "block";
    bodyContent.style.display = "block";
    burgerClose.style.display = "none";
    burgerContent.style.display = "none";
})
