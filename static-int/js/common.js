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

    loadMapScript();
});

// google map
var locations = [
    ["","United States",38.0,-97.0],["Brackel","Germany",53.3,10.0333],["San Diego","United States",32.9656,-117.127],["San José","Costa Rica",9.9333,-84.0833],["Caxias Do Sul","Brazil",-29.1689,-51.1785],["Kandel","Germany",49.0865,8.1826],["Kiev","Ukraine",50.4333,30.5167],["Thalheim Bei Wels","Austria",48.15,14.0333],["Hohen Neuendorf","Germany",52.7092,13.2662],["Lorquí","Spain",38.0826,-1.251],["San Ramon","United States",37.7806,-121.9904],["Wildau","Germany",52.3167,13.6333],["Melbourne","Australia",-37.8139,144.9634],["Buenos Aires","Argentina",-34.5875,-58.6725],["Esbjerg","Denmark",55.4703,8.4519],["San Francisco","United States",37.7749,-122.4194],["Basel","Switzerland",47.5584,7.5733],["Zeuthen","Germany",52.3667,13.6167],["Potsdam","Germany",52.4,13.0667],["Dublin","Ireland",53.3331,-6.2489],["Leimen","Germany",49.3517,8.6846],["Redmond","United States",47.6801,-122.1206],["Berlin","Germany",52.5167,13.4],["Tokyo","Japan",35.685,139.7514],["Madrid","Spain",40.4069,-3.674],["Nürnberg","Germany",49.4478,11.0683],["Cedar Rapids","United States",42.0083,-91.6441],["Carlsbad","United States",33.1581,-117.3506],["Silver Spring","United States",39.0261,-77.0084],["South San Francisco","United States",37.6547,-122.4077],["Augsburg","Germany",48.3877,10.9161],["Groß Kreutz","Germany",52.4167,12.8],["Köln","Germany",50.9333,6.95],["Herndon","United States",38.9841,-77.3827],["Jersey City","United States",40.7282,-74.0776],["Linz","Austria",48.2976,14.2916],["Reading","United Kingdom",51.4429,-0.9768],["Rostock","Germany",54.0833,12.1333],["Spring","United States",30.0799,-95.4172],["Korneuburg","Austria",48.3333,16.35],["Itzehoe","Germany",53.9167,9.6],["Saint Petersburg","Russian Federation",60.0922,30.2368],["Kuala Lumpur","Malaysia",3.0934,101.6794],["London","United Kingdom",51.5513,-0.0584],["Toronto","Canada",43.6392,-79.4058],["Starnberg","Germany",47.9904,11.3463],["Pennant Hills","Australia",-33.7333,151.0667],["Riga","Latvia",56.95,24.1],["Austin","United States",30.4,-97.7528],["Columbus","United States",40.1018,-83.073],["Dallas","United States",32.8019,-96.7883],["Palma De Mallorca","Spain",39.5667,2.65],["Ashburn","United States",39.0437,-77.4875],["Obninsk","Russian Federation",55.0968,36.6101],["Eggenstein","Germany",49.0953,8.3906],["Dresden","Germany",51.0452,13.6996],["Mountain View","United States",37.386,-122.0838],["Jakarta","Indonesia",-6.1744,106.8294],["Hyderabad","India",17.3753,78.4744],["Höst","Germany",51.65,6.1833],["Langerwehe","Germany",50.8167,6.35],["Bexbach","Germany",49.36,7.2674],["Frankfurt Am Main","Germany",50.1172,8.7281],["Titisee-neustadt","Germany",47.9,8.1667],["Weichs","Germany",47.65,11.2167],["Moss","Norway",59.4367,10.6692],["São Paulo","Brazil",-23.4733,-46.6658],["Utrecht","Netherlands",52.0938,5.1191],["Rottweil","Germany",48.1697,8.6422],["Vinnytsya","Ukraine",49.2328,28.481],["New Delhi","India",28.6,77.2],["Hangzhou","China",30.2936,120.1614],["Greifswald","Germany",54.1,13.3833],["Seoul","Korea, Republic of",37.5985,126.9783],["Mumbai","India",18.975,72.8258],["Bangalore","India",12.9833,77.5833],["Fort Lauderdale","United States",26.1143,-80.384],["Lansing","United States",42.7257,-84.636],["San Salvador","El Salvador",13.7086,-89.2031],["Bogotá","Colombia",4.6492,-74.0628],["Nanning","China",22.8167,108.3167],["Schönefeld","Germany",51.9833,12.8333],["Golden","United States",39.7555,-105.2211],["Vilnius","Lithuania",54.6833,25.3167],["Sunnyvale","United States",37.3697,-122.0214],["Orange Park","United States",30.0966,-81.719],["Metuchen","United States",40.5411,-74.3632],["Edison","United States",40.5767,-74.3674],["Prien Am Chiemsee","Germany",47.8667,12.3333],["Kurim","Czech Republic",49.3026,16.5327],["Cherkassy","Ukraine",49.4285,32.0621],["Kirkland","Canada",45.46,-73.85],["Seattle","United States",47.6062,-122.3321],["San Jose","United States",37.3394,-121.895],["Tervakoski","Finland",60.8,24.6167],["Sankt Ingbert","Germany",49.2833,7.1167],["Vienna","Austria",48.2,16.3667],["Ferny Creek","Australia",-37.8833,145.3333],["Mohorn","Germany",51.0167,13.4667],["West Linn","United States",45.3422,-122.6639],["San Antonio","United States",29.5157,-98.3626],["Ivankov","Ukraine",50.1396,28.8774],["Buchholz","Germany",53.3285,9.8621],["Rösrath","Germany",50.9182,7.1979],["Amstelveen","Netherlands",52.3107,4.8768],["Unterföhring","Germany",48.2,11.6333],["Ann Arbor","United States",42.2923,-83.7145],["Grand Prairie","United States",32.746,-96.9978],["Antiguo Cuscatlán","El Salvador",13.6731,-89.2408],["Ingolstadt","Germany",48.7515,11.4588],["Riesa","Germany",51.2991,13.2848],["Woltersdorf","Germany",52.45,13.7667],["New York","United States",40.7267,-73.9981],["Langenhagen","Germany",52.4402,9.6656],["Boardman","United States",45.7788,-119.529],["Bonn","Germany",50.7462,7.1294],["Unterhaching","Germany",48.0726,11.6023],["Etobicoke","Canada",43.6088,-79.5574],["Beijing","China",39.9289,116.3883],["Chongqing","China",29.5628,106.5528],["Badenweiler","Germany",47.8052,7.6784],["Reit Im Winkl","Germany",47.6587,12.5281],["Redwood City","United States",37.4625,-122.2405],["Garching","Germany",48.2499,11.6309],["Kremenchug","Ukraine",49.072,33.4275],["Visselhövede","Germany",52.9833,9.6],["Wayland","United States",42.3613,-71.3629],["Bad Münstereifel","Germany",50.55,6.7634],["Boston","United States",42.3424,-71.0878],["Chicago","United States",41.85,-87.65],["Hamburg","Germany",53.55,10.0],["Bucheon","Korea, Republic of",37.4989,126.7831],["Opelousas","United States",30.5335,-92.1163],["Tostedt","Germany",53.2333,9.65],["Obolon","Ukraine",49.6032,32.8676],["Concord","United States",38.0033,-122.0318],["Seevetal","Germany",53.4,9.9667],["Pasig City","Philippines",14.5604,121.0812],["Emeryville","United States",37.8342,-122.2897],["Baytown","United States",29.7355,-94.9774],["Oslo","Norway",59.9167,10.75],["Birkenwerder","Germany",52.6833,13.2833],["Tel Aviv","Israel",32.0667,34.7667],["Radeberg","Germany",51.1167,13.9167],["Hanoi","Vietnam",21.0333,105.85],["Secunderabad","India",17.45,78.5],["Munich","Germany",48.15,11.5833],["Scottsdale","United States",33.6119,-111.8906],["Traunstein","Germany",47.87,12.6388],["Houston","United States",29.7633,-95.3633],["Brooklyn","United States",40.6234,-74.0288],["Lillestrøm","Norway",59.95,11.0833],["Saint Gallen","Switzerland",47.4254,9.3776],["Weingarten","Germany",47.8,9.6333],["Freiburg","Germany",48.0,7.85],["Breitenau","Germany",50.8667,13.8667],["Würselen","Germany",50.819,6.1406],["Mannheim","Germany",49.4883,8.4647],["Stuttgart","Germany",48.7667,9.1833],["Montréal","Canada",45.508,-73.554],["Poltava","Ukraine",49.5937,34.5407],["Tempe","United States",33.4357,-111.9171],["Alicante","Spain",38.4,-0.4667],["Prague","Czech Republic",50.0833,14.4667],["Los Angeles","United States",34.0708,-118.3762]
];
function initializeMap(){
    var map = new google.maps.Map(document.getElementById('map-canvas'), {
        scrollwheel: false,
        zoom: 2,
        center: new google.maps.LatLng(32.0667,34.7667),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();
    var bounds = new google.maps.LatLngBounds();

    var marker, i;
    var markers=[];

    for (i = 0; i < locations.length; i++) {
        var position = new google.maps.LatLng(locations[i][2], locations[i][3]);
        bounds.extend(position);
        marker = new google.maps.Marker({
            position: position,
            map: map
        });

        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infowindow.setContent(locations[i][0] + ' ' + locations[i][1]);
                infowindow.open(map, marker);
            }
        })(marker, i));
        markers.push(marker);
    }

    // Automatically center the map fitting all markers on the screen
    // map.fitBounds(bounds);
    var mc = new MarkerClusterer(map, markers);
}
function loadMapScript() {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&' +
        'callback=initializeMap';
    document.body.appendChild(script);
}