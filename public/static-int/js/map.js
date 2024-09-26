$(document).ready(function () {
  loadMapScript()
})

// google map
// var locations = [
//   ['Birkenwerder', 'Germany', 52.6833, 13.2833],
//   ['Tel Aviv', 'Israel', 32.0667, 34.7667],

// ]

const locations = [
  { name: 'Kansas United States', lat: 38.0, lng: -97.0 },
  { name: 'Brackel Germany', lat: 53.3, lng: 10.0333 },
  { name: 'San Diego United States', lat: 32.9656, lng: -117.127 },
  { name: 'San José Costa Rica', lat: 9.9333, lng: -84.0833 },
  { name: 'Caxias Do Sul Brazil', lat: -29.1689, lng: -51.1785 },
  { name: 'Kandel Germany', lat: 49.0865, lng: 8.1826 },
  { name: 'Kiev Ukraine', lat: 50.4333, lng: 30.5167 },
  { name: 'Thalheim Bei Wels Austria', lat: 48.15, lng: 14.0333 },
  { name: 'Hohen Neuendorf Germany', lat: 52.7092, lng: 13.2662 },
  { name: 'Lorquí Spain', lat: 38.0826, lng: -1.251 },
  { name: 'San Ramon United States', lat: 37.7806, lng: -121.9904 },
  { name: 'Wildau Germany', lat: 52.3167, lng: 13.6333 },
  { name: 'Melbourne Australia', lat: -37.8139, lng: 144.9634 },
  { name: 'Buenos Aires Argentina', lat: -34.5875, lng: -58.6725 },
  { name: 'Esbjerg Denmark', lat: 55.4703, lng: 8.4519 },
  { name: 'San Francisco United States', lat: 37.7749, lng: -122.4194 },
  { name: 'Basel Switzerland', lat: 47.5584, lng: 7.5733 },
  { name: 'Zeuthen Germany', lat: 52.3667, lng: 13.6167 },
  { name: 'Potsdam Germany', lat: 52.4, lng: 13.0667 },
  { name: 'Dublin Ireland', lat: 53.3331, lng: -6.2489 },
  { name: 'Leimen Germany', lat: 49.3517, lng: 8.6846 },
  { name: 'Redmond United States', lat: 47.6801, lng: -122.1206 },
  { name: 'Berlin Germany', lat: 52.5167, lng: 13.4 },
  { name: 'Tokyo Japan', lat: 35.685, lng: 139.7514 },
  { name: 'Madrid Spain', lat: 40.4069, lng: -3.674 },
  { name: 'Nürnberg Germany', lat: 49.4478, lng: 11.0683 },
  { name: 'Cedar Rapids United States', lat: 42.0083, lng: -91.6441 },
  { name: 'Carlsbad United States', lat: 33.1581, lng: -117.3506 },
  { name: 'Silver Spring United States', lat: 39.0261, lng: -77.0084 },
  { name: 'South San Francisco United States', lat: 37.6547, lng: -122.4077 },
  { name: 'Augsburg Germany', lat: 48.3877, lng: 10.9161 },
  { name: 'Groß Kreutz Germany', lat: 52.4167, lng: 12.8 },
  { name: 'Köln Germany', lat: 50.9333, lng: 6.95 },
  { name: 'Herndon United States', lat: 38.9841, lng: -77.3827 },
  { name: 'Jersey City United States', lat: 40.7282, lng: -74.0776 },
  { name: 'Linz Austria', lat: 48.2976, lng: 14.2916 },
  { name: 'Reading United Kingdom', lat: 51.4429, lng: -0.9768 },
  { name: 'Rostock Germany', lat: 54.0833, lng: 12.1333 },
  { name: 'Spring United States', lat: 30.0799, lng: -95.4172 },
  { name: 'Korneuburg Austria', lat: 48.3333, lng: 16.35 },
  { name: 'Itzehoe Germany', lat: 53.9167, lng: 9.6 },
  { name: 'Saint Petersburg Russian Federation', lat: 60.0922, lng: 30.2368 },
  { name: 'Kuala Lumpur Malaysia', lat: 3.0934, lng: 101.6794 },
  { name: 'London United Kingdom', lat: 51.5513, lng: -0.0584 },
  { name: 'Toronto Canada', lat: 43.6392, lng: -79.4058 },
  { name: 'Starnberg Germany', lat: 47.9904, lng: 11.3463 },
  { name: 'Pennant Hills Australia', lat: -33.7333, lng: 151.0667 },
  { name: 'Riga Latvia', lat: 56.95, lng: 24.1 },
  { name: 'Austin United States', lat: 30.4, lng: -97.7528 },
  { name: 'Columbus United States', lat: 40.1018, lng: -83.073 },
  { name: 'Dallas United States', lat: 32.8019, lng: -96.7883 },
  { name: 'Palma De Mallorca Spain', lat: 39.5667, lng: 2.65 },
  { name: 'Ashburn United States', lat: 39.0437, lng: -77.4875 },
  { name: 'Obninsk Russian Federation', lat: 55.0968, lng: 36.6101 },
  { name: 'Eggenstein Germany', lat: 49.0953, lng: 8.3906 },
  { name: 'Dresden Germany', lat: 51.0452, lng: 13.6996 },
  { name: 'Mountain View United States', lat: 37.386, lng: -122.0838 },
  { name: 'Jakarta Indonesia', lat: -6.1744, lng: 106.8294 },
  { name: 'Hyderabad India', lat: 17.3753, lng: 78.4744 },
  { name: 'Höst Germany', lat: 51.65, lng: 6.1833 },
  { name: 'Langerwehe Germany', lat: 50.8167, lng: 6.35 },
  { name: 'Bexbach Germany', lat: 49.36, lng: 7.2674 },
  { name: 'Frankfurt Am Main Germany', lat: 50.1172, lng: 8.7281 },
  { name: 'Titisee-neustadt Germany', lat: 47.9, lng: 8.1667 },
  { name: 'Weichs Germany', lat: 47.65, lng: 11.2167 },
  { name: 'Moss Norway', lat: 59.4367, lng: 10.6692 },
  { name: 'São Paulo Brazil', lat: -23.4733, lng: -46.6658 },
  { name: 'Utrecht Netherlands', lat: 52.0938, lng: 5.1191 },
  { name: 'Rottweil Germany', lat: 48.1697, lng: 8.6422 },
  { name: 'Vinnytsya Ukraine', lat: 49.2328, lng: 28.481 },
  { name: 'New Delhi India', lat: 28.6, lng: 77.2 },
  { name: 'Hangzhou China', lat: 30.2936, lng: 120.1614 },
  { name: 'Greifswald Germany', lat: 54.1, lng: 13.3833 },
  { name: 'Seoul Korea Republic of', lat: 37.5985, lng: 126.9783 },
  { name: 'Mumbai India', lat: 18.975, lng: 72.8258 },
  { name: 'Bangalore India', lat: 12.9833, lng: 77.5833 },
  { name: 'Fort Lauderdale United States', lat: 26.1143, lng: -80.384 },
  { name: 'Lansing United States', lat: 42.7257, lng: -84.636 },
  { name: 'San Salvador El Salvador', lat: 13.7086, lng: -89.2031 },
  { name: 'Bogotá Colombia', lat: 4.6492, lng: -74.0628 },
  { name: 'Nanning China', lat: 22.8167, lng: 108.3167 },
  { name: 'Schönefeld Germany', lat: 51.9833, lng: 12.8333 },
  { name: 'Golden United States', lat: 39.7555, lng: -105.2211 },
  { name: 'Vilnius Lithuania', lat: 54.6833, lng: 25.3167 },
  { name: 'Sunnyvale United States', lat: 37.3697, lng: -122.0214 },
  { name: 'Orange Park United States', lat: 30.0966, lng: -81.719 },
  { name: 'Metuchen United States', lat: 40.5411, lng: -74.3632 },
  { name: 'Edison United States', lat: 40.5767, lng: -74.3674 },
  { name: 'Prien Am Chiemsee Germany', lat: 47.8667, lng: 12.3333 },
  { name: 'Kurim Czech Republic', lat: 49.3026, lng: 16.5327 },
  { name: 'Cherkassy Ukraine', lat: 49.4285, lng: 32.0621 },
  { name: 'Kirkland Canada', lat: 45.46, lng: -73.85 },
  { name: 'Seattle United States', lat: 47.6062, lng: -122.3321 },
  { name: 'San Jose United States', lat: 37.3394, lng: -121.895 },
  { name: 'Tervakoski Finland', lat: 60.8, lng: 24.6167 },
  { name: 'Sankt Ingbert Germany', lat: 49.2833, lng: 7.1167 },
  { name: 'Vienna Austria', lat: 48.2, lng: 16.3667 },
  { name: 'Ferny Creek Australia', lat: -37.8833, lng: 145.3333 },
  { name: 'Mohorn Germany', lat: 51.0167, lng: 13.4667 },
  { name: 'West Linn United States', lat: 45.3422, lng: -122.6639 },
  { name: 'San Antonio United States', lat: 29.5157, lng: -98.3626 },
  { name: 'Ivankov Ukraine', lat: 50.1396, lng: 28.8774 },
  { name: 'Buchholz Germany', lat: 53.3285, lng: 9.8621 },
  { name: 'Rösrath Germany', lat: 50.9182, lng: 7.1979 },
  { name: 'Amstelveen Netherlands', lat: 52.3107, lng: 4.8768 },
  { name: 'Unterföhring Germany', lat: 48.2, lng: 11.6333 },
  { name: 'Ann Arbor United States', lat: 42.2923, lng: -83.7145 },
  { name: 'Grand Prairie United States', lat: 32.746, lng: -96.9978 },
  { name: 'Antiguo Cuscatlán El Salvador', lat: 13.6731, lng: -89.2408 },
  { name: 'Ingolstadt Germany', lat: 48.7515, lng: 11.4588 },
  { name: 'Riesa Germany', lat: 51.2991, lng: 13.2848 },
  { name: 'Woltersdorf Germany', lat: 52.45, lng: 13.7667 },
  { name: 'New York United States', lat: 40.7267, lng: -73.9981 },
  { name: 'Langenhagen Germany', lat: 52.4402, lng: 9.6656 },
  { name: 'Boardman United States', lat: 45.7788, lng: -119.529 },
  { name: 'Bonn Germany', lat: 50.7462, lng: 7.1294 },
  { name: 'Unterhaching Germany', lat: 48.0726, lng: 11.6023 },
  { name: 'Etobicoke Canada', lat: 43.6088, lng: -79.5574 },
  { name: 'Beijing China', lat: 39.9289, lng: 116.3883 },
  { name: 'Chongqing China', lat: 29.5628, lng: 106.5528 },
  { name: 'Badenweiler Germany', lat: 47.8052, lng: 7.6784 },
  { name: 'Reit Im Winkl Germany', lat: 47.6587, lng: 12.5281 },
  { name: 'Redwood City United States', lat: 37.4625, lng: -122.2405 },
  { name: 'Garching Germany', lat: 48.2499, lng: 11.6309 },
  { name: 'Kremenchug Ukraine', lat: 49.072, lng: 33.4275 },
  { name: 'Visselhövede Germany', lat: 52.9833, lng: 9.6 },
  { name: 'Wayland United States', lat: 42.3613, lng: -71.3629 },
  { name: 'Bad Münstereifel Germany', lat: 50.55, lng: 6.7634 },
  { name: 'Boston United States', lat: 42.3424, lng: -71.0878 },
  { name: 'Chicago United States', lat: 41.85, lng: -87.65 },
  { name: 'Hamburg Germany', lat: 53.55, lng: 10.0 },
  { name: 'Bucheon Korea Republic of', lat: 37.4989, lng: 126.7831 },
  { name: 'Opelousas United States', lat: 30.5335, lng: -92.1163 },
  { name: 'Tostedt Germany', lat: 53.2333, lng: 9.65 },
  { name: 'Obolon Ukraine', lat: 49.6032, lng: 32.8676 },
  { name: 'Concord United States', lat: 38.0033, lng: -122.0318 },
  { name: 'Seevetal Germany', lat: 53.4, lng: 9.9667 },
  { name: 'Pasig City Philippines', lat: 14.5604, lng: 121.0812 },
  { name: 'Emeryville United States', lat: 37.8342, lng: -122.2897 },
  { name: 'Baytown United States', lat: 29.7355, lng: -94.9774 },
  { name: 'Oslo Norway', lat: 59.9167, lng: 10.75 },
  { name: 'Birkenwerder Germany', lat: 52.6833, lng: 13.2833 },
  { name: 'Tel Aviv Israel', lat: 32.0667, lng: 34.7667 },
  { name: 'Radeberg Germany', lat: 51.1167, lng: 13.9167 },
  { name: 'Hanoi Vietnam', lat: 21.0333, lng: 105.85 },
  { name: 'Secunderabad India', lat: 17.45, lng: 78.5 },
  { name: 'Munich Germany', lat: 48.15, lng: 11.5833 },
  { name: 'Scottsdale United States', lat: 33.6119, lng: -111.8906 },
  { name: 'Traunstein Germany', lat: 47.87, lng: 12.6388 },
  { name: 'Houston United States', lat: 29.7633, lng: -95.3633 },
  { name: 'Brooklyn United States', lat: 40.6234, lng: -74.0288 },
  { name: 'Lillestrøm Norway', lat: 59.95, lng: 11.0833 },
  { name: 'Saint Gallen Switzerland', lat: 47.4254, lng: 9.3776 },
  { name: 'Weingarten Germany', lat: 47.8, lng: 9.6333 },
  { name: 'Freiburg Germany', lat: 48.0, lng: 7.85 },
  { name: 'Breitenau Germany', lat: 50.8667, lng: 13.8667 },
  { name: 'Würselen Germany', lat: 50.819, lng: 6.1406 },
  { name: 'Mannheim Germany', lat: 49.4883, lng: 8.4647 },
  { name: 'Stuttgart Germany', lat: 48.7667, lng: 9.1833 },
  { name: 'Montréal Canada', lat: 45.508, lng: -73.554 },
  { name: 'Poltava Ukraine', lat: 49.5937, lng: 34.5407 },
  { name: 'Tempe United States', lat: 33.4357, lng: -111.9171 },
  { name: 'Alicante Spain', lat: 38.4, lng: -0.4667 },
  { name: 'Prague Czech Republic', lat: 50.0833, lng: 14.4667 },
  { name: 'Los Angeles United States', lat: 34.0708, lng: -118.3762 },
]

//   ['Radeberg', 'Germany', 51.1167, 13.9167],
//   ['Hanoi', 'Vietnam', 21.0333, 105.85],
//   ['Secunderabad', 'India', 17.45, 78.5],
//   ['Munich', 'Germany', 48.15, 11.5833],
//   ['Scottsdale', 'United States', 33.6119, -111.8906],
//   ['Traunstein', 'Germany', 47.87, 12.6388],
//   ['Houston', 'United States', 29.7633, -95.3633],
//   ['Brooklyn', 'United States', 40.6234, -74.0288],
//   ['Lillestrøm', 'Norway', 59.95, 11.0833],
//   ['Saint Gallen', 'Switzerland', 47.4254, 9.3776],
//   ['Weingarten', 'Germany', 47.8, 9.6333],
//   ['Freiburg', 'Germany', 48.0, 7.85],
//   ['Breitenau', 'Germany', 50.8667, 13.8667],
//   ['Würselen', 'Germany', 50.819, 6.1406],
//   ['Mannheim', 'Germany', 49.4883, 8.4647],
//   ['Stuttgart', 'Germany', 48.7667, 9.1833],
//   ['Montréal', 'Canada', 45.508, -73.554],
//   ['Poltava', 'Ukraine', 49.5937, 34.5407],
//   ['Tempe', 'United States', 33.4357, -111.9171],
//   ['Alicante', 'Spain', 38.4, -0.4667],
//   ['Prague', 'Czech Republic', 50.0833, 14.4667],
//   ['Los Angeles', 'United States', 34.0708, -118.3762],

function initializeMap() {
  var map = new google.maps.Map(document.getElementById('map-canvas'), {
    scrollwheel: false,
    zoom: 2,
    center: new google.maps.LatLng(32.0667, 34.7667),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
  })

  var infowindow = new google.maps.InfoWindow()
  var bounds = new google.maps.LatLngBounds()

  var marker, i
  var markers = []

  for (i = 0; i < locations.length; i++) {
    var position = new google.maps.LatLng(locations[i][2], locations[i][3])
    bounds.extend(position)
    marker = new google.maps.Marker({
      position: position,
      map: map,
    })

    google.maps.event.addListener(
      marker,
      'click',
      (function (marker, i) {
        return function () {
          infowindow.setContent(locations[i][0] + ' ' + locations[i][1])
          infowindow.open(map, marker)
        }
      })(marker, i)
    )
    markers.push(marker)
  }

  // Automatically center the map fitting all markers on the screen
  // map.fitBounds(bounds);
  var mc = new MarkerClusterer(map, markers)
}
function loadMapScript() {
  var script = document.createElement('script')
  script.type = 'text/javascript'
  script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&' + 'callback=initializeMap'
  document.body.appendChild(script)
}
