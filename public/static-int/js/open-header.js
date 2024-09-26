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


$(document).ready(function(){
    $.get('sections/header.html', function(html) {
        $('#header').html(html);
    });
});