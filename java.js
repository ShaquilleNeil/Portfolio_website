// $(document).ready(function () {
//     $(window).scroll(function () {
//         if (this.scrollY > 20) {
//             $('.navbar').addClass("sticky");
//         } else {
//             $('.navbar').removeClass("sticky");
//         }
//         if (this.scrollY > 500) {
//             $('.scroll-up-btn').addClass("show");
//         } else {
//             $('.scroll-up-btn').removeClass("show");
//         }
//     });
//     $('.scroll-up-btn').click(function () {
//         $('html').animate({ scrollTop: 0 });
//     });})
document.addEventListener('DOMContentLoaded', function() {
    var options = {
        strings: ["LaSalle College Student Developer", "Front-end Developer", "programmer in HTML,JAVA,CSS,JQUERY"],
        typeSpeed: 100,
        backSpeed: 100,  
        backDelay: 1500,
        loop: true
    };
 
    var typed = new Typed(".text-3 span", options);
});
 
window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    navbar.classList.toggle('sticky', window.scrollY > window.innerHeight);
});

   $(document).ready(function(){
            // Initialize Owl Carousel with default speed
            var owl = $('.owl-carousel');
            owl.owlCarousel({
                items: 3,
                loop: true,
                margin: 10,
                autoplay: true,
                autoplayTimeout: 5000, // Default speed (5 seconds)
                autoplayHoverPause: true,
                nav: false,
                navText: [
                    '<i class="bi bi-arrow-left"></i>',
                    '<i class="bi bi-arrow-right"></i>'
                ],
                dots: true
            });
            
            // Speed control functionality
            $('#speed-slider').on('input', function() {
                var speed = $(this).val();
                $('#speed-value').text(speed);
                
                // Update the autoplay speed
                owl.trigger('stop.owl.autoplay');
                owl.trigger('play.owl.autoplay', [parseInt(speed)]);
            });
        });