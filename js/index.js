
$(document).ready(function() {
  $('.slick-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 768, // Mobile view
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 1024, // Tablet view
        settings: {
          slidesToShow: 2
        }
      }
    ]
  });
});






// Map
        
            // Get the location and hours section
            const locationHoursSection = document.getElementById('location-hours');
        
            // Create an intersection observer to detect when the section is visible in the viewport
            const locationObserver = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // Add the class to trigger the fade-in animation
                        entry.target.classList.add('in-view');
                        locationObserver.unobserve(entry.target); // Stop observing once the section is in view
                    }
                });
            }, { threshold: 0.5 }); // Trigger when 50% of the section is visible
            
            // Start observing the location and hours section
            locationObserver.observe(locationHoursSection);



            
            // Header Anime
            document.addEventListener('DOMContentLoaded', () => {
              const navLinks = document.querySelectorAll('.nav-link');
              const currentPath = window.location.pathname;
  
              // Set the active link on page load
              let isActiveSet = false;
              navLinks.forEach(link => {
                  if (currentPath.includes(link.getAttribute('href'))) {
                      link.classList.add('active');
                      isActiveSet = true;
                  } else {
                      link.classList.remove('active');
                  }
              });
  
              // If no active link was set, default to Home
              if (!isActiveSet) {
                  navLinks.forEach(link => {
                      if (link.getAttribute('href').endsWith('index.html')) {
                          link.classList.add('active');
                          isActiveSet = true;
                      }
                  });
              }
          });