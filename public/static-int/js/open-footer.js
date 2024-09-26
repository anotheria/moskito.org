$(document).ready(function(){
    $.get('sections/footer.html', function(html) {
        $('#footer').html(html);
    });
});