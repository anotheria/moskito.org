$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
    $('.tooltip-top').tooltip({placement:'top', container: 'body'}).on('show', function (e) {e.stopPropagation();});

    $('[data-toggle="popover"]').popover({trigger:'hover'});

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