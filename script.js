let tl = gsap.timeline();
tl.from(".logo", {
  x: -20,
  y: -50,
  opacity: 0,
  duration: 0.5,
  delay: 0.2,
})
  .from("nav p", {
    x: -15,
    y: -50,
    opacity: 0,
    duration: 0.5,
    stagger: 0.3,
  })
  .from(".contactus", {
    x: 20,
    y: -50,
    opacity: 0,
    duration: 0.5,
  });

gsap.from(".sub1", {
  xPercent: -100,
  opacity: 0,
  duration: 1,
});

gsap.from(".sub2", {
  x: 50,

  opacity: 0,
  duration: 0.5,
  delay: 0.3,
});

gsap.from(".title", {
  x: 20,
  y: -40,
  opacity: 0,
  duration: 0.7,
  delay: 0.2,
});

gsap.to(".mainBtn", {
  opacity: 1,
  x: 0,
  duration: 0.5,
});
gsap.to(".mainImg,.mainImgWrap", {
  duration: 1.5,
  opacity: 1,
  transform: "scale(1)",
  // ease: "power2.out",
});

gsap.from("#Services div h2", {
  x: -10,
  y: -50,
  opacity: 0,
  duration: 0.8,
  scrollTrigger: {
    trigger: "#Services",
    scroller: "body",
    scrub: 1,
    start: "20% 100%",
    end: "50% 50%",
  },
});

gsap.from(".project1", {
  xPercent: -100,

  opacity: 0,
  duration: 2,
  scrollTrigger: {
    trigger: ".project1",
    scroller: "body",
    scrub: true,

    start: "top 80%",
    end: "top 50%",
  },
});
gsap.from(".project2", {
  xPercent: 100,

  opacity: 0,
  duration: 2,
  scrollTrigger: {
    trigger: ".project2",
    scroller: "body",
    scrub: true,

    start: "top 80%",
    end: "top 30%",
  },
});
gsap.from(".s-text", {
  x: -10,
  y: -50,
  opacity: 0,
  duration: 0.8,
  delay: 0.3,
  scrollTrigger: {
    trigger: "#Services",
    scroller: "body",
    scrub: 1,
  },
});
gsap.from("#Projects", {
  x: -20,
  y: -30,
  opacity: 0,
  scrollTrigger: {
    trigger: "#Projects",
    scroller: "body",
    scrub: 1,
    start: "20% 100%",
    end: "50% 10%",
  },
});

var swiper = new Swiper(".swiper", {
  spaceBetween: 30,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  keyboard: {
    enabled: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,

  // Add Swiper breakpoints

  breakpoints: {
    0: { slidesPerView: 1 },
    668: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  },
});

gsap.from(".swiper", {
  // x: -50,
  y: -100,
  scrollTrigger: {
    trigger: ".swiper",
    scroller: "body",
    scrub: true,
    start: "20% 100%",
    end: "80% 80%",
  },
});

gsap.from("#Contact div h2", {
  x: -20,
  y: -30,
  opacity: 0,
  scrollTrigger: {
    trigger: "#Contact",
    scroller: "body",
    scrub: 1,
    start: "20% 100%",
    end: "80% 80%",
  },
});

gsap.from("#Contact div div a", {
  x: -20,
  y: -30,
  opacity: 0,
  stagger: 0.3,
  scrollTrigger: {
    trigger: "#Contact",
    scroller: "body",
    scrub: 1,
    start: "20% 100%",
    end: "80% 80%",
  },
});

gsap.from("#Skills div div", {
  x: -20,
  y: -30,
  opacity: 0,
  stagger: 0.8,
  scrollTrigger: {
    trigger: "#Skills",
    scroller: "body",
    scrub: 1,
    start: "20% 100%",
    end: "80% 80%",
  },
});

let icon = document.querySelector(".icon");
let closeIcon = document.querySelector(".closeIcon");


let tl2 = gsap.timeline();
tl2.to(".full", {
    right: 0,
   
});
tl2.from(".full p", {
  x: -50,
  y: -20,
  opacity: 0,
  stagger: 0.3,
});
tl2.from(".closeIcon", {
    opacity: 0,
    duration:0.3
    
})
tl2.pause()
icon.addEventListener("click",()=> {
    tl2.play()
})
closeIcon.addEventListener("click", () => {
    tl2.reverse()
})
