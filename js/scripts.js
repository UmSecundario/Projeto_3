function init_map(){

    var myOptions = {
    zoom:15,
    center:new google.maps.LatLng(-27.586811,-48.54557299999999),
    mapTypeId: google.maps.MapTypeId.ROADMAP

};

    map = new google.maps.Map(document.getElementById('mapa'), myOptions);

    marker = new google.maps.Marker({map: map,position: new google.maps.LatLng(-27.586811,-48.54557299999999)});

    infowindow = new google.maps.InfoWindow({
        content:'<p style="color:black;text-align:left;font-weight:bold;">Meu Mapa</p><p style="color:black;text-align:left;">Rua Rafael Bandeira Florianópolis</p><br>'});

    google.maps.event.addListener(marker, 'click', function(){
    infowindow.open(map,marker);});

    infowindow.open(map,marker);}

   init_map(); 

    

// TESTE 1

// window.onload = function(){
    
//     var map;

//     function initMap(){
//         var mapProp = {
//             center : new google.maps.LatLng(-27.648598, -48.577423),
//             scrollwhell : false,
//             zoom : 12,
//             mapTypeId: google.maps.mapTypeId.ROADMAP
//         }
//     }
//     initMap();
// }

// TESTE 2

// window.onload = function(){

//     var map;

//     function initMap() {
//         var centerLatLng = new google.maps.LatLng(-27.648598, -49.577423);
//         var mapOptions = {
//             center: centerLatLng,
//             zoom: 12,
//         };
//         var map = new google.maps.Map(document.getElementById('mapa'), mapOptions);
//     }

//     initMap();

// }