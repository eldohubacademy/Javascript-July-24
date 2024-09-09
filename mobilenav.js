const myButton = document.getElementById("open-nav")

myButton.addEventListener("click", function (){
    document.querySelector("nav").classList.toggle("open")
})

