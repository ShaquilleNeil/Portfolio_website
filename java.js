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
        strings: ["LaSalle College Student Developer", "Junior Software Developer"],
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

$(document).ready(function () {
    // Retained hook for future JS widgets.
});