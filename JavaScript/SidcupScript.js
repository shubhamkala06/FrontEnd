//-------------Functions-------------
function mouseTracker(e){
    cursor.style.left = (e.x-2) + "px";
    cursor.style.top = (e.y+12) + "px";
    cursorBlur.style.left = (e.x - 200) + "px";
    cursorBlur.style.top = (e.y - 200) + "px";
}

function move(){
    slides.forEach((slide)=>{
        slide.style.transform = `translateX(-${+(cnt)*100}%)`;
    })
}

function changeslide(e){
    cnt = +(e.target.getAttribute("data-val"));
    btns.forEach((btn)=>{
        btn.style.backgroundColor = "transparent";
        btn.parentNode.style.border = "none"
    })
    e.target.style.backgroundColor = "#91b508";
    e.target.parentNode.style.border = "2px solid #91b508";
    move();   
}

function scaleUpCrsr(){
    cursor.style.scale = 2;
    cursor.style.backgroundColor = "transparent";
    cursor.style.border = "0.1px solid white"
}

function scaleDownCrsr(){
    cursor.style.scale = 1;
    cursor.style.backgroundColor = "#91b508";
    cursor.style.border = "none"
}
//-------------Variables-------------
const cursor = document.querySelector(".cursor");
const cursorBlur = document.querySelector(".cursorBlur")
const slides = document.querySelectorAll(".carousel img");
const btns = document.querySelectorAll(".btn");
let cnt = 0;
const navs = document.querySelectorAll(".navigation");
//-------------Random Code-------------
slides.forEach((slide,index)=>{
    slide.style.left = `${index*100}%`;
})
//-------------Event Listeners-------------
window.addEventListener("mousemove",mouseTracker);

btns.forEach((btn)=>{
    btn.addEventListener("mouseover",changeslide);
})

navs.forEach(function(e){
    e.addEventListener("mouseenter",scaleUpCrsr);
})

navs.forEach(function(e){
    e.addEventListener("mouseleave",scaleDownCrsr);
})
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
        start: "top -30%",
        end: "top -70%",
        scrub: 2
    }
})

gsap.from(".aboutUsText,.aboutUs img",{
    y:200,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:".aboutUs",
        scroller:"body",
        start:"top 60%",
        end:"top 40%",
        scrub:3
    }
})

gsap.from(".card",{
    scale:0.8,
    opacity:0,
    duration:1,
    stagger:0.1,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        start:"top 70%",
        end:"top 65%",
        scrub:1
    }
})

gsap.from("#colon1",{
    y:-60,
    x:-70,
    duration:1,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 55%",
        end:"top 40%",
        scrub:3
    }
})

gsap.from("#colon2",{
    y:60,
    x:70,
    duration:1,
    scrollTrigger:{
        trigger:"#colon2",
        scroller:"body",
        start:"top 100%",
        end:"top 85%",
        scrub:3
    }
})