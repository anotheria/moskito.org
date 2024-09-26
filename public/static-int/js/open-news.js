$(document).ready(function(){
    $.get('sections/news.html', function(html) {
        $('#news').html(html);
    });

    $.get('sections/social-widget.html', function(html) {
        $('#socialWidget').html(html);
    });
});