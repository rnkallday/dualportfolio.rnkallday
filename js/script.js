// Hero section JavaScript (from CodePen 1: https://codepen.io/rnkallday/pen/myJyvwg)
// Original uses $(window).load(), which fires after all content (including images) is loaded.
// $(document).ready() fires when the DOM is ready, which is usually sufficient.
// For this task, we'll keep $(window).load() as per the original pen.

$(window).load(function () {
  $(".wrapper").removeClass("nopre");
});

$("#container > div").click(function () {
  if ($("#container").attr("class") == $(this).attr("id")) {
    $("#container").removeClass();
  } else {
    $("#container").removeClass().addClass($(this).attr("id"));
  }
});

$("#container > div > ul").click(function (e) {
  e.stopPropagation();
});

// Scrolling pages JavaScript (from CodePen 2: https://codepen.io/GreenSock/pen/JjQYqRO)
// Ensure this code runs after the DOM is ready and GSAP libraries are loaded.
// Placing script tags at the end of the body usually handles this.

gsap.registerPlugin(ScrollTrigger);

const containers = gsap.utils.toArray(".horizontal-container");

containers.forEach((container, index) => {
  let panels = gsap.utils.toArray(".panel", container);
  let scrollTween = gsap
    .timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "+=3000", // Adjust this value based on the desired scroll length for the horizontal section
        pin: true,
        scrub: 2, // Smooth scrubbing effect
        markers: true // For development, remove for production
      }
    })
    .to(panels, {
      xPercent: -100 * (panels.length - 1),
      ease: "none", // Linear animation for smooth scrolling
      duration: panels.length // Duration proportional to the number of panels
    })
    .to(
      {},
      {
        duration: 1 / panels.length // Add a small delay at the end of the horizontal scroll
      }
    );
});
