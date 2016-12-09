function initMap(lat, lng) {
    divMap = document.getElementById("map");
    initPosition = new google.maps.LatLng(37.171204, -3.598550);
    coords = [initPosition];
    
    map = new google.maps.Map(divMap, {
        center: initPosition, 
        zoom: 16,
        disableDefaultUI: true
    });

    marker = new google.maps.Marker({
        position: initPosition,
        title: '#' + coords.length,
        map: map,
        icon: 'resources/marker.png',
        animation: google.maps.Animation.DROP
    });
}


window.onload = () => initMap(37.171204, -3.598550);