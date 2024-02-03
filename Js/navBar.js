const nav = document.querySelector("nav");
const logo = document.querySelector("#logo");
const tel = document.querySelector("#tel");
const showMenuIcon= document.querySelector(".showMenuIcon");

function scrollNavBar() {
    let scrollY = window.scrollY
    if(scrollY> 10){
        nav.style.backgroundColor = "#fff"
        nav.classList.add("navMenuActive")
        logo.classList.add("filter")
        tel.classList.add("filter")
        showMenuIcon.classList.add("bgPurple")

    }else{
        nav.style.backgroundColor = ""
        nav.classList.remove("navMenuActive")
        logo.classList.remove("filter")
        tel.classList.remove("filter")
        showMenuIcon.classList.remove("bgPurple")
    }
}
window.onscroll = scrollNavBar
