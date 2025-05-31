// Hero section JavaScript (from CodePen 1: https://codepen.io/rnkallday/pen/myJyvwg)
// Updated to use the modern jQuery on('load') method instead of the deprecated load() method

// Debug messages to console
if (process.env.NODE_ENV === 'development') {
  console.log("Script loading...");
}

$(window).on('load', function () {
  if (process.env.NODE_ENV === 'development') {
    console.log("Window loaded, removing nopre class");
  }
  if ($(".wrapper").length) {
    $(".wrapper").removeClass("nopre");
  } else {
    console.warn('No element with class "wrapper" found.');
  }

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
  if (process.env.NODE_ENV === 'development') {
    // Debug message removed to avoid redundancy
  }
// This code will run after the DOM is ready and GSAP libraries are loaded

$(document).ready(function() {
  console.log("Document ready, checking for GSAP");
  
    if (process.env.NODE_ENV === 'development') {
      // Removed duplicate "jQuery loaded successfully" log for clarity
    }
  if (typeof $ === 'undefined') {
    console.error("jQuery not loaded!");
  } else {
    console.log("jQuery loaded successfully");
    if (process.env.NODE_ENV === 'development') {
      console.log("GSAP loaded successfully");
    }
  
  // Make sure GSAP and ScrollTrigger are available
      if (process.env.NODE_ENV === 'development') {
        console.log("ScrollTrigger loaded successfully");
      }
    console.log("GSAP loaded successfully");
    
    if (typeof ScrollTrigger !== 'undefined') {
        if (process.env.NODE_ENV === 'development') {
          console.log("ScrollTrigger registered successfully");
        }
      
      try {
        if (process.env.NODE_ENV === 'development') {
          console.log("Found " + containers.length + " horizontal containers");
        }
        const containers = gsap.utils.toArray(".horizontal-container");
        console.log("Found " + containers.length + " horizontal containers");

        containers.forEach((container) => {
        console.log("ScrollTrigger registered successfully");
            if (process.env.NODE_ENV === 'development') {
              console.log("No panels found in container");
            }
          
          // Initialize panels by selecting child elements of the container
          const panels = gsap.utils.toArray(container.querySelectorAll(".panel"));
          
          // Skip if no panels found
          if (panels.length === 0) {
          if (process.env.NODE_ENV === 'development') {
            console.log("Setting up ScrollTrigger for " + panels.length + " panels");
          }
            return;
          }
          
          console.log("Setting up ScrollTrigger for " + panels.length + " panels");
          
          gsap.to(panels, {
            xPercent: -100 * (panels.length - 1),
            ease: "none",
            scrollTrigger: {
              trigger: container,
              start: "top top",
              anticipatePin: 1,
              markers: process.env.NODE_ENV === 'development', // Enable markers only in development
              onUpdate: (self) => {
                console.log("ScrollTrigger progress: " + self.progress.toFixed(2));
              }
            }
          });
        if (process.env.NODE_ENV === 'development') {
          console.log("GSAP ScrollTrigger initialized successfully");
        }
        
        // Initialize any additional animations or sections as needed
        // (add your code here if needed)
        } // End of containers.forEach
      } catch (error) {
        console.error("Error initializing GSAP for container:", container, "with panels:", panels, "Error details:", error);
      }
    }
  } else {
    console.error("GSAP not loaded correctly. Check script tags.");
    alert("GSAP failed to load. Please ensure the GSAP library is included in your HTML file and try refreshing the page.");
  }
});
