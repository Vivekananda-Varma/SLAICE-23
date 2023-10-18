document.addEventListener("DOMContentLoaded", function () {
    // Get references to all your carousels
    var carousels = document.querySelectorAll(".carousel");

    // Iterate through each carousel and initialize it with wrap: false
    carousels.forEach(function (carousel) {
        new bootstrap.Carousel(carousel, {
            wrap: false
        });
    });
});