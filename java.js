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
        strings: ["GHL Automation Specialist", "Full-Stack Developer", "Workflow Designer"],
        typeSpeed: 55,
        backSpeed: 40,
        backDelay: 1800,
        loop: true,
        smartBackspace: true
    };

    var typedEl = document.querySelector(".typed-hero");
    if (typedEl && typeof Typed !== "undefined") {
        new Typed(".typed-hero", options);
    }
});
 
window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    navbar.classList.toggle('sticky', window.scrollY > window.innerHeight);
});

$(document).ready(function () {
    // Retained hook for future JS widgets.
});