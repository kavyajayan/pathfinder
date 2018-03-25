var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1g41vQp_gpSvDEdly57Bp4cdBsDjOO4xKqp_sUJ4ac-A/edit?usp=sharing';

// function init() {
//     Tabletop.init( { key: publicSpreadsheetUrl,
//                      callback: initMap,
//                      simpleSheet: true } )
// }

// function add_new_markers(coordinates) {
//     coordinates.forEach(function(coord, i) {
//         var marker = new google.maps.Marker({
//             map: map,
//             position: new google.maps.LatLng(coord[i][0], coord[i][1]),
//             title: "marker title"
//         });
//     });
// }

// function fetch_markers() {
//     var coordinates = tabletop.all()
//     function(res) {
//         if (res.coordinates) add_new_markers(res.coordinates);
//     }
// }
  
function initMap() {

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: new google.maps.LatLng(10.00000, 76.340000),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var kakkanad = {
        info: '<strong>Kakkanad bus stop</strong><br>\
                Thrikkakara<br>Kakkanad<br>Kerala 682030<br>\
                <a href="https://goo.gl/maps/YsxiB9aZ4rS2">Get Directions</a>',
        lat: 10.015725,
        long: 76.342044
    };

    $.getJSON('http://localhost:3000/', function(data) {
    console.log(data);
    var lat = data.latitude;
    var lng = data.longitude;
    console.log(lat);
    console.log(data.latitude);
    var len = lat.length;
    var marker, i;
    var lat_last=lat[len-1];
    var lng_last=lng[len-1];
    console.log(lat_last+" "+lng_last);
    marker = new google.maps.Marker({
        position: new google.maps.LatLng(lat_last, lng_last),
        map: map
    });
});
}

setInterval(initMap, 10000);

//window.addEventListener('DOMContentLoaded', initMap)