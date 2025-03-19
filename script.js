let tl = gsap.timeline();
tl.to(".logo,nav p,.contactus", {
  x: 0,
  y: 0,
  opacity: 1,
  duration: 0.5,
  stagger:0.3,
  delay: 0.2,
})

gsap.to(".sub1", {
  transform: "translateX(0)",
  opacity: 1,
  duration: 1,
});

gsap.to(".sub2", {
  x: 0,
  opacity: 1,
  duration: 0.3,
  delay: 0.3,
});

gsap.to(".title", {
  x: 0,
  y: 0,
  opacity: 1,
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

gsap.to("#Services div h2", {
  x: 0,
  y: 0,
  opacity: 1,
  duration: 0.3,
  scrollTrigger: {
    trigger: "#Services",
    scroller: "body",
    scrub: 1,
    start: "20% 100%",
    end: "50% 50%",
  },
});

gsap.to(".project1", {
  transform: "translateX(0)",

  opacity: 1,
  duration: 2,
  scrollTrigger: {
    trigger: ".project1",
    scroller: "body",
    scrub: true,

    start: "top 80%",
    end: "top 50%",
  },
});
gsap.to(".project2", {
  transform: "translateX(0)",

  opacity: 1,
  duration: 2,
  scrollTrigger: {
    trigger: ".project2",
    scroller: "body",
    scrub: true,

    start: "top 80%",
    end: "top 30%",
  },
});
gsap.to(".s-text", {
  x: 0,
  y: 0,
  opacity: 1,
  duration: 0.8,
  delay: 0.3,
  scrollTrigger: {
    trigger: "#Services",
    scroller: "body",
    scrub: 1,
  },
});
gsap.to("#Projects", {
  x: 0,
  y: 0,
  duration:0.5,
  opacity: 1,
  scrollTrigger: {
    trigger: "#Projects",
    scroller: "body",
    scrub: 1,
    start: "20% 100%",
    end: "20% 20%",
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

gsap.to("#Contact div h2", {
  x: 0,
  y: 0,
  opacity: 1,
  scrollTrigger: {
    trigger: "#Contact",
    scroller: "body",
    scrub: 1,
    start: "20% 100%",
    end: "80% 80%",
  },
});

gsap.to("#Contact div div a", {
  x: 0,
  y: 0,
  opacity: 1,
  stagger: 0.3,
  scrollTrigger: {
    trigger: "#Contact",
    scroller: "body",
    scrub: 1,
    start: "20% 100%",
    end: "80% 80%",
  },
});

gsap.to("#Skills div div", {
  x: 0,
  y: 0,
  opacity: 1,
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
  duration: 0.3,
});
tl2.pause();
icon.addEventListener("click", () => {
  tl2.play();

  // document.querySelector(".full").classList.add("flex")
  // document.querySelector(".full").classList.remove("hidden")
});
closeIcon.addEventListener("click", () => {
  tl2.reverse();

  // document.querySelector(".full").classList.add("hidden")
  // document.querySelector(".full").classList.remove("flex")
});
