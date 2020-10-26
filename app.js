$(document).ready(function () {
    $("#testimonial-slider").owlCarousel({
        items: 3,
        itemsDesktop: [1000, 3],
        itemsDesktopSmall: [990, 2],
        itemsTablet: [768, 2],
        itemsMobile: [650, 1],
        pagination: true,
        navigation: false,
        autoPlay: true
    });
});

function myFunction() {
    var name = document.getElementById("name").value;
    var message = document.getElementById("message").value;
    var href = "https://wa.me/6282242861274?text=".concat("Hi, saya ", name, "! ", message);
    location.href = href;
}