function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: 52.705457, lng: 21.085301};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Kleszewo 06 Pułtusk, Poland' // Title Location
    });
}