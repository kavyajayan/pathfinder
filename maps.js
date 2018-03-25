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

    var coordinates = [
        [10.015725,76.342045],
        [10.015725,76.342050],
        [10.015725,76.342055],
        [10.015725,76.342060],
        [10.015725,76.342065],
        [10.015725,76.342070],
        [10.015725,76.342075],
        [10.015725,76.342080],
        [10.015725,76.342085],
        [10.015725,76.342090],
        [10.015725,76.342095],
        [10.015725,76.342100],
        [10.015725,76.342105],
        [10.015725,76.342110],
        [10.015725,76.342115],
        [10.015725,76.342120],
        [10.015725,76.342125],
        [10.015725,76.342130],
        [10.015725,76.342135],
        [10.015725,76.342140],
        [10.015725,76.342145],
        [10.015725,76.342150],
        [10.015725,76.342155],
        [10.015725,76.342160],
        [10.015725,76.342165],
        [10.015725,76.342170],
    ];

    var locations = [
        [kakkanad.info, kakkanad.lat, kakkanad.long, 0],
    ];

 	var infowindow = new google.maps.InfoWindow({});

    var marker, i;
    
    // for (i = 0; i < coordinates.length; i++) {
	    marker = new google.maps.Marker({
		    position: new google.maps.LatLng(coordinates[i][0], coordinates[i][1]),
            map: map
        });
    //     sleep(2000);
    // }
	    //google.maps.event.addListener(marker, 'click', (function (marker, i) {
		//    return function () {
		//	    infowindow.setContent(locations[i][0]);
		//	    infowindow.open(map, marker);
	    //	}
	    //})(marker, i));
}