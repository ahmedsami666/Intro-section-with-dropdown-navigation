var icon = document.querySelectorAll(".icon-menu")[0];
var menu = document.querySelectorAll(".menu")[0];
var close = document.querySelectorAll(".icon-close")[0]

icon.addEventListener("click", function(){
    menu.style.display = "grid"
})
close.addEventListener("click", function(){
    menu.style.display = "none"
})