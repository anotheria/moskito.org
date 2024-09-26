$(document).ready(function(){
    $.get('sections/companies.html', function(html) {
        $('#companies').html(html);
    });
});