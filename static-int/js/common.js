$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 40) {
            $('.wrapper').addClass("scroll");
        } else if ($(this).scrollTop() <= 30 && $('.wrapper').hasClass("scroll")) {
            $('.wrapper').removeClass("scroll");
        }
    });//scroll

    $('.inactive span').tooltip({
        placement: 'bottom'
    });

    $('#xmasGreeting').modal('show');

    $('.integrate-box').hover(function () {
        $('.integrate-box').css('margin-right', '0%');
    }, function () {
        $('.integrate-box').css('margin-right', '50%');
    });

    $('.inspect-box').hover(function () {
        $('.integrate-box').css('margin-right', '100%');
    }, function () {
        $('.integrate-box').css('margin-right', '50%');
    });

    $('.bar-link').click(function () {
        $('body').toggleClass('right-menu-active');
        return false;
    });
});