$(document).ready(function(){

    $.get('sections/contact-form.html', function(html) {
        $('#contact-form').html(html);
    });

});