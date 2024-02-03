const cDrop1 = document.getElementById('cDrop1')
const cDrop2 = document.getElementById('cDrop2')
const cDrop3 = document.getElementById('cDrop3')
const cDrop4 = document.getElementById('cDrop4')
const offcanvasRight = document.getElementById("offcanvasRight")

let flag1 = true
let flag2 = true
let flag3 = true
let flag4 = true

function openDrop1() {
    cDrop1.style.display = flag1 ? 'flex' : 'none'
    flag1 = !flag1
}
function openDrop2() {
    cDrop2.style.display = flag2 ? 'flex' : 'none'
    flag2 = !flag2
}
function openDrop3() {
    cDrop3.style.display = flag3 ? 'flex' : 'none'
    flag3 = !flag3
}
function openDrop4() {
    cDrop4.style.display = flag4 ? 'flex' : 'none'
    flag4 = !flag4
}

function showMenu(){
    offcanvasRight.classList.toggle("show")
    document.body.classList.toggle("overflow-hidden")
}