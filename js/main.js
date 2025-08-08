(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();
    
    
   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Team carousel
    $(".team-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: false,
        dots: false,
        loop: true,
        margin: 50,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


    // Testimonial carousel

    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        center: true,
        dots: true,
        loop: true,
        margin: 0,
        nav : true,
        navText: false,
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


     // Fact Counter

     $(document).ready(function(){
        $('.counter-value').each(function(){
            $(this).prop('Counter',0).animate({
                Counter: $(this).text()
            },{
                duration: 2000,
                easing: 'easeInQuad',
                step: function (now){
                    $(this).text(Math.ceil(now));
                }
            });
        });
    });



})(jQuery);

  // Array of testimonials
  const testimonials = [
    {
        img: "img/testimonial-4.jpg",
        name: "Williams",
        profession: "App Developer",
        stars: 5,
        text: "Build your trust with them. They work beyond expectations."
    },
    {
      img: "img/testimonial-1.jpg",
      name: "Emily White",
      profession: "Entrepreneur",
      stars: 5,
      text: "The team was fantastic! They delivered beyond expectations and were incredibly professional."
    },
    {
      img: "img/testimonial-2.jpg",
      name: "Michael Brown",
      profession: "Designer",
      stars: 4,
      text: "Great experience working with this team. They were attentive to details and easy to work with."
    },
    {
      img: "img/testimonial-3.jpg",
      name: "Jane Smith",
      profession: "Software Engineer",
      stars: 5,
      text: "Outstanding service! Highly recommend them for their expertise and dedication."
    },
    {
      img: "img/testimonial-4.jpg",
      name: "John Doe",
      profession: "Marketing Specialist",
      stars: 5,
      text: "Superb work! The team went above and beyond to meet our needs."
    }
  ];

  let currentTestimonialIndex = 0;

  function updateTestimonial() {
    const testimonial = testimonials[currentTestimonialIndex];

    document.getElementById("testimonial-img").src = testimonial.img;
    document.getElementById("client-name").textContent = testimonial.name;
    document.getElementById("client-profession").textContent = testimonial.profession;

    const starRating = document.getElementById("star-rating");
    starRating.innerHTML = "";
    for (let i = 0; i < testimonial.stars; i++) {
      const star = document.createElement("i");
      star.className = "fas fa-star me-1 text-primary";
      starRating.appendChild(star);
    }

    document.getElementById("testimonial-text").textContent = testimonial.text;

    currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
  }

  // Update testimonial every 5 seconds
  setInterval(updateTestimonial, 5000);

  // Initial load
  updateTestimonial();


