$(document).ready(function () {
    var lat = $('#vapeshop-data').data('vapeshop-latitude');
    var lng = $('#vapeshop-data').data('vapeshop-longitude');
    var coordinates = { lat: lat, lng: lng };

    var map = new google.maps.Map(document.getElementById('map'), {

        center: coordinates,
        zoom: 14

    });
    map.setOptions({minZoom: 3});

    var marker = new google.maps.Marker({
        position: coordinates,
        map: map
    });


});