var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1g41vQp_gpSvDEdly57Bp4cdBsDjOO4xKqp_sUJ4ac-A/edit?usp=sharing';

var lat_last;

function clearMarkers() {
    setMapOnAll(null);
}
  
function initMap() {

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: new google.maps.LatLng(10.015725,76.34245),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var kakkanad = {
        info: '<strong>Kakkanad bus stop</strong><br>\
                Thrikkakara<br>Kakkanad<br>Kerala 682030<br>\
                <a href="https://goo.gl/maps/YsxiB9aZ4rS2">Get Directions</a>',
        lat: 10.015725,
        long: 76.342044
    };
    var markers=[];
    var fetch_data = function () {
       
        $.getJSON('http://localhost:3000/', function(data) {
            console.log(data);
            var lat = data.latitude;
            var lng = data.longitude;
            console.log(lat);
            console.log(data.latitude);
            var len = lat.length;
            var marker, i;
            lat_last=lat[len-1];
            var lng_last=lng[len-1];
            console.log(lat_last+" "+lng_last);
            for (var i = 0; i < markers.length; i++) {
                markers[i].setMap(null);
            }
            markers = [];
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(lat_last, lng_last),
                map: map
            });
            markers.push(marker);
        })
        setTimeout(fetch_data, 10000);
      };
      fetch_data();
}

//setInterval(initMap, 10000);

//window.addEventListener('DOMContentLoaded', initMap)