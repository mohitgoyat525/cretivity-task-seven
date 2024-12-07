
const tl = gsap.timeline({ repeat: 3, repeatDelay: 3 });

tl.to(".line--top", { duration: 0.9, width: "100%", ease: "power2.in" })
  .to(".line--right", { duration: 0.9, height: "100%", ease: "none" }, "-=0.2")
  .to(".line--bottom", { duration: 0.9, width: "100%", ease: "none" }, "-=0.2")
  .to(
    ".line--left",
    { duration: 0.4, height: "100%", ease: "power2.out" },
    "-=0.3"
  )

 
  .to(".mask", { duration: 1, left: "100%", ease: "power2.in" })

  .to(".text", { duration: 0.7, opacity: 1 }, "-=0.3")
  .to(".text2", { duration: 0.7, opacity: 1 }, "-=0.3");
