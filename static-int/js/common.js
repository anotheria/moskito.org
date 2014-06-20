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

    $('.bar-link a').click(function () {
        $('body').addClass('right-menu-active');
        return false;
    });
    $('.close-bar-box').click(function () {
        $('body').removeClass('right-menu-active');
        return false;
    });
});