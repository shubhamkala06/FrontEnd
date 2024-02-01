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