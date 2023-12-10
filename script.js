function locoScroll() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });


    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();





}

locoScroll()


function cursorEffect() {
    var pg1C = document.querySelector("#page1-content")
    var cursor = document.querySelector("#cursor")


    pg1C.addEventListener("mousemove", function (dets) {
        gsap.to("#cursor", {
            x: dets.x,
            y: dets.y,
        })

    })

    pg1C.addEventListener("mouseenter", function () {
        gsap.to("#cursor", {
            scale: 1,
            opacity: 1,
        })
    })
    pg1C.addEventListener("mouseleave", function () {
        gsap.to("#cursor", {
            scale: 0,
            opacity: 0,
        })
    })




























}
cursorEffect()


function page2Anime() {


    gsap.from("#page2-content", {
        y: 120,
        stagger: 0.5,
        duration: 1,
        opacity: 0,
        delay: 2,
        scrollTrigger: {
            trigger: "#page2",
            scroller: "#main",
            start: "top 75%",
            end: "top 65%",
            scrub: 2
        }

    })

    gsap.from("#page2-content h2", {
        y: 120,
        stagger: 0.5,
        duration: 1,
        opacity: 0,
        delay: 2,
        scrollTrigger: {
            trigger: "#page2",
            scroller: "#main",
            start: "top 75%",
            end: "top 65%",
            scrub: 2,
            opacity: 1,
        }

    })
    gsap.from("#page2 h1", {
        y: 120,
        stagger: 0.5,
        duration: 1,
        delay: 2,
        scrollTrigger: {
            trigger: "#page2",
            scroller: "#main",
            start: "top 75%",
            end: "top 65%",
            scrub: 2
        }

    })


    gsap.from("#page4-content h2 ,#page4 h1 ", {
        y: 120,
        stagger: 0.5,
        duration: 1,
        opacity: 1,
        delay: 2,
        scrollTrigger: {
            trigger: "#page4",
            scroller: "#main",
            start: "top 75%",
            end: "top 65%",
            scrub: 2,
            opacity: 1,
        }

    })

    gsap.from("#page3-top h2", {
        y: 120,
        stagger: 0.5,
        duration: 1,
        opacity: 0,
        delay: 2,
        scrollTrigger: {
            trigger: "#page3",
            scroller: "#main",
            start: "top 75%",
            end: "top 65%",
            scrub: 2,


        }

    })
    gsap.from("#page6-content h2, #page6 h1", {
        y: 120,
        stagger: 0.5,
        duration: 1,
        opacity: 0,
        delay: 2,
        scrollTrigger: {
            trigger: "#page6",
            scroller: "#main",
            start: "top 75%",
            end: "top 65%",
            scrub: 2,


        }

    })

    gsap.from("#page5-content h1 span", {
        y: 120,
        stagger: 0.5,
        duration: 1,
        opacity: 0,
        delay: 2,
        scrollTrigger: {
            trigger: "#page6",
            scroller: "#main",
            start: "top 120%",
            end: "top 100%",
            scrub: 2,


        }

    })

    gsap.from("#page7-top h1", {
        y: 120,
        stagger: 0.3,
        duration: 1,
        opacity: 0,
        scrollTrigger: {
            trigger: "#page7",
            scroller: "#main",
            start: "top 75%",
            end: "top 65%",
            scrub: 2,


        }

    })

    gsap.from("#page7 h3", {
        x: 120,
        stagger: 0.3,
        duration: 1,
        opacity: 0,
        scrollTrigger: {
            trigger: "#page7",
            scroller: "#main",
            start: "top 75%",
            end: "top 65%",
            scrub: 2,


        }

    })
    










}
page2Anime()

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: true,
        scrub:1
      },
});


var tl = gsap.timeline()
tl.from("#loader h3, h2",{
    x:40,
    opacity:0,
    duration:1,
    stagger:0.1
})
tl.to("#loader h3, h2",{
    opacity:0,
    x:-30,
    duration:1,
    stagger:0.1

})
tl.to("#loader",{
    opacity:0,

})
tl.to("#loader",{
    display:"none"

})

tl.from("#page1-content h1 span",{
    y:100,
    opacity:0,
    stagger:0.1,
    duration:0.5,
    delay:-0.5

})

