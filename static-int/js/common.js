$(document).ready(function() {
    $(window).scroll(function(){
        if ( $(this).scrollTop() > 40){
            $('body').addClass("scroll");
        } else if($(this).scrollTop() <= 30 && $('body').hasClass("scroll")) {
            $('body').removeClass("scroll");
        }
    });//scroll

    $().UItoTop({ easingType: 'easeOutQuart', text: '<i class="icon-angle-up"></i>' });

    $('.inactive span').tooltip({
        placement: 'bottom'
    });

});