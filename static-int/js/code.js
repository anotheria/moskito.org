$(window).scroll(function () {
    if ($(window).scrollTop() > 280) {
        $('.scrollspy').addClass('fixed');
    }
    if ($(window).scrollTop() < 281) {
        $('.scrollspy').removeClass('fixed');
    }
});