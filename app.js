 var burger = document.querySelector(".navbar__burgermenu")
 var cta = document.querySelector(".hero__btn")


 burger.addEventListener("click",function (evt) {
     document.querySelector(".navbar__links").classList.toggle("navbar__links--toggle")
 })

 cta.addEventListener("click",function (evt) {
     alert("Looking forward to working with you :) ")
 })