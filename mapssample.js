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

    var locations = [
        [kakkanad.info, kakkanad.lat, kakkanad.long, 0],
    ];

 	var infowindow = new google.maps.InfoWindow({});

    var marker, i;

    for (i = 0; i < locations.length; i++) {
	    marker = new google.maps.Marker({
		    position: new google.maps.LatLng(locations[i][1], locations[i][2]),
		    map: map
	    });

	    google.maps.event.addListener(marker, 'click', (function (marker, i) {
		    return function () {
			    infowindow.setContent(locations[i][0]);
			    infowindow.open(map, marker);
	    	}
	    })(marker, i));
    }
}