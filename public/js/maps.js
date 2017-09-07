$(document).ready(function () {
    // Create a map object and specify the DOM element for display.
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 50.452194, lng: 30.527561},
        zoom: 11

    });
    map.setOptions({minZoom: 3});

    var markers = [];

    var elements = $('#vapeshops-list').children();

    for(var i = 0; i < elements.length; i++) {
        var coordinates = { lat: $(elements[i]).data('location-lat'), lng: $(elements[i]).data('location-lng') };

        var marker = new google.maps.Marker({
            position: coordinates,
            map: map,
            title: 'Hello'
        });

        markers.push(marker);
    }

});