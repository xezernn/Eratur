const nav = document.querySelector("nav");
const logo = document.querySelector("#logo");
const tel = document.querySelector("#tel");
function scrollNavBar() {
    let scrollY = window.scrollY
    if(scrollY> 10){
        nav.style.backgroundColor = "#fff"
        nav.classList.add("navMenuActive")
        logo.classList.add("filter")
        tel.classList.add("filter")
    }else{
        nav.style.backgroundColor = ""
        nav.classList.remove("navMenuActive")
        logo.classList.remove("filter")
        tel.classList.remove("filter")
    }
}
window.onscroll = scrollNavBar
