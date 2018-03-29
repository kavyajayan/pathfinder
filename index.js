var lat_last;
var lng_last;
var lat, lng, busno;
var markers = [
    [],
    [],
    [],
    []
];

function clearMarkers() {
    setMapOnAll(null);
}

function initMap() {

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: new google.maps.LatLng(10.01516, 76.329422),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    busnumlist = [1, 2, 3, 4];

    var fetch_data = function() {

        $.getJSON('http://localhost:3000/', function(data) {
            console.log(data);
            var index;
            lat = data.latitude;
            lng = data.longitude;
            busno = data.busnumber;
            console.log(lat);
            console.log(busno);
            var len = lat.length;
            var markermap, i;
            for (i = 0; i < busnumlist.length; i++) {
                console.log(busnumlist.length);
                console.log(i + 1);
                index = fetch_last_pos(i + 1);
                lat_last = lat[index];
                lng_last = lng[index];
                console.log(index);
                console.log(lat_last + " " + lng_last);
                console.log(markers[i]);
                for (var j = 0; j < markers[i].length; j++) {
                    markers[i][j].setMap(null);
                }
                markers[i] = [];
                var icon = {
                    url: 'https://cdn3.iconfinder.com/data/icons/transport-29/100/14-512.png',
                    scaledSize: new google.maps.Size(50, 50), // scaled size
                    origin: new google.maps.Point(0, 0), // origin
                    anchor: new google.maps.Point(0, 0)
                };
                markermap = new google.maps.Marker({
                    position: new google.maps.LatLng(lat_last, lng_last),
                    map: map,
                    icon: icon
                });
                markers[i].push(markermap);
            }
        })
        setTimeout(fetch_data, 10000);
    };
    fetch_data();
}

function fetch_last_pos(num) {
    var k;
    for (k = lat.length - 1; k >= 0; k--) {
        if (busno[k] == num) {
            return k;
        }
    }
}

//window.addEventListener('DOMContentLoaded', initMap)