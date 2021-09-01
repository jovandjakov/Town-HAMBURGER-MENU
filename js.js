
/*------BUTTON UP----------------*/ 
var btUp = document.getElementById("bt");

window.addEventListener("scroll", skroluj);
function skroluj() {
    if(window.pageYOffset > 300) {
        btUp.style.display = "block";
    }
    else {
        btUp.style.display = "none";
    }
}

btUp.addEventListener("click", vratiGore);
function vratiGore() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
}


/*------HAMBURGER MENU----------------*/ 
var hamburger = document.getElementById("hamburger");
var navUl = document.getElementById("nav-ul");

hamburger.addEventListener("click", function() {
    navUl.classList.toggle("show");
});