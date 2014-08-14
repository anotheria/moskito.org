$(document).ready(function () {

    // Cache the Window object
    $window = $(window);
    $('[data-type="background"]').each(function(){
        var $bgobj = $(this); // assigning the object
        $(window).scroll(function() {
// Scroll the background at var speed
// the yPos is a negative value because we're scrolling it UP!
            var yPos = -($window.scrollTop() / $bgobj.data('speed'));
// Put together our final background position
            var coords = '50% '+ yPos + 'px';
// Move the background
            $bgobj.css({ backgroundPosition: coords });
        }); // window scroll Ends
    });

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

    $('.bar-box, .close-bar-box').click(function () {
        $('body').toggleClass('right-menu-active');
    });
});