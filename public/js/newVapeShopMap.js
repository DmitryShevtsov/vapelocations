$(document).ready(function () {
    // Create a map object and specify the DOM element for display.
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 50.452194, lng: 30.527561},
        zoom: 11

    });
    map.setOptions({minZoom: 3});

    google.maps.event.addListener(map, 'click', function(event) {
        placeMarker(event.latLng);
    });

    var marker;

    function placeMarker(location) {
        if(marker) {
            marker.setMap(null);
        }
        marker = new google.maps.Marker({
            position: location,
            map: map
        });
        var lat = marker.getPosition().lat();
        var lng = marker.getPosition().lng();

        document.getElementById('shop-latitude').value = lat;
        document.getElementById('shop-longitude').value = lng;
    }



});