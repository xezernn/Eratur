// const air = document.querySelector(".footerAirplane");
// let x = 0;
// let count = 0;
// air.style.bottom = "1%";
// function plane() {
//     const newY = window.scrollY;
//     if (newY > x) { if (newY > 4800 && newY < 5900 && parseInt(air.style.bottom) < 90) count++ }
//     else { if (newY > 4800 && newY < 5900 && parseInt(air.style.bottom) > 0) count-- }
//     air.style.bottom = `${count}%`;
//     air.style.right = `${count}%`;
//     x = newY;
// }
// window.onscroll = plane;


const footer = document.querySelector('footer');
const air = document.querySelector(".footerAirplane");
if (footer) {
    const windowHeight = window.innerHeight;
    const sectionOffset = footer.offsetTop;
    function airplane() {
        const scrollOffset = (window.scrollY + windowHeight - sectionOffset) / windowHeight;

        let translateX, translateY
        let scaleFactor = 1;

        if (windowHeight >= 1300) {
            translateX = scrollOffset * 2570;
            translateY = scrollOffset * 1500;
            scaleFactor = 0.8;
        } else if (windowHeight >= 1100) {
            translateX = scrollOffset * 1000;
            translateY = scrollOffset * 300;
        } else if (windowHeight >= 900) {
            translateX = scrollOffset * 1500;
            translateY = scrollOffset * 300;
        } else {
            translateX = scrollOffset * 900;
            translateY = scrollOffset * 300;
        }
        air.style.transform = `translate(-${translateX}px, -${translateY}px) scale(${scaleFactor})`;
    }

    window.onscroll = airplane

}

