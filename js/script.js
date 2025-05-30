// Hero section JavaScript (from CodePen 1: https://codepen.io/rnkallday/pen/myJyvwg)
// Updated to use the modern jQuery on('load') method instead of the deprecated load() method

$(window).on('load', function () {
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
// Initialize GSAP and ScrollTrigger for the horizontal scrolling sections
// This code will run after the DOM is ready and GSAP libraries are loaded

$(document).ready(function() {
  // Make sure GSAP and ScrollTrigger are available
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    const containers = gsap.utils.toArray(".horizontal-container");

    containers.forEach((container) => {
      let panels = gsap.utils.toArray(".panel", container);
      
      // Skip if no panels found
      if (panels.length === 0) return;
      
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: () => "+=" + (container.offsetWidth - window.innerWidth),
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
          anticipatePin: 1,
          markers: true // Remove this in production
        }
      });
    });
    
    // Initialize any additional animations or sections as needed
    
    console.log("GSAP ScrollTrigger initialized successfully");
  } else {
    console.error("GSAP or ScrollTrigger not loaded correctly. Check script tags.");
  }
});
