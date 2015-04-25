$(function () {
    $('[data-toggle="tooltip"]').tooltip();
});

var toggleHeaderFloating = function() {
    // Floating Header
    if ( $( window ).scrollTop() > 50 ) {
        $( 'body' ).addClass( 'scroll' );
    } else {
        $( 'body' ).removeClass( 'scroll' );
    };
};

$( window ).on( 'scroll', toggleHeaderFloating );
toggleHeaderFloating();

$(window).stellar();
