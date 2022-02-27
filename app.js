 var burger = document.querySelector(".navbar__burgermenu")

 burger.addEventListener("click",function (evt) {
     document.querySelector(".navbar__links").classList.toggle("navbar__links--toggle")
 })
