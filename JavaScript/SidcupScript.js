//-------------Functions-------------
function mouseTracker(e){
    cursor.style.left = (e.x-7) + "px";
    cursor.style.top = (e.y+2) + "px";
    cursorBlur.style.left = (e.x - 200) + "px";
    cursorBlur.style.top = (e.y - 200) + "px";
}
//-------------Variables-------------
const cursor = document.querySelector(".cursor");
const cursorBlur = document.querySelector(".cursorBlur")
//-------------Event Listeners-------------
document.addEventListener("mousemove",mouseTracker);
//---------------GSAP----------------
gsap.to("nav",{
    backgroundColor: "#000",
    height: "110px",
    duration: 0.5,
    scrollTrigger:{
        trigger:"nav",
        scroller:"body",
        start:"top -10%",
        end:"top -11%",
        scrub: 1
    }
})

gsap.to(".main",{
    backgroundColor: "#000",
    scrollTrigger:{
        trigger: ".main",
        scroller: "body",
        start: "top -25%",
        end: "top -70%",
        scrub: 2
    }
})