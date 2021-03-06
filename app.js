/**
 * Created by Line on 05/04/16.
 */
var WHAT = "#What";
var WHERE = "#Where";
var WHO = "#Who";
var GO = "#go";

var map;
var infowindow;
var restaurants_nearby;
var first = true;
var request;
var radios;

function showSection(id){
    $('section').hide();
    $(id).show();
}

function success(position) {
    var mapcanvas = document.createElement('div');
    mapcanvas.id = 'mapcontainer';

    document.querySelector(WHERE).appendChild(mapcanvas);

    var here = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

    var options = {
        zoom: 15,
        center: here,
        mapTypeControl: false,
        navigationControlOptions: {
            style: google.maps.NavigationControlStyle.SMALL
        },
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    map = new google.maps.Map(document.getElementById("mapcontainer"), options);

    var marker = new google.maps.Marker({
        position: here,
        map: map,
        title:"You are here!"
    });

    //get selected radio button
    //radios = $('input[name="food"]:checked').value;
    radios = $("input[type='radio'][name='food']:checked");


        request = {
        location: here,
        radius: 600,
        types: ['restaurant'],
            keyword: ['pizza']
    };
    //überschreibt auf jeden fall den gesetzten wert ('pizza') für requesr.keyword.
    // aber ersetzt ihn leider mit nichts -> radios funktioniert noch nicht richtig;
    request.keyword = radios.val();


    infowindow = new google.maps.InfoWindow();

    // Create the PlaceService and send the request.
    var service = new google.maps.places.PlacesService(map);

    service.nearbySearch(request, function(results, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            restaurants_nearby = results;
            // Create a marker for each restaurant found.
            for (var i = 0; i < results.length; i++) {
                createMarker(results[i], i+1);
            }
        }
    });
}



function changeHandler(event) {
    request.keyword = [this.value];

}

function createMarker(place, number) {

    // Create a blue marker for the restaurants
    var iconFile = 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld='+number+'|31c398|000000';
    var placeLoc = place.geometry.location;
    var marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location
    });

    marker.setIcon(iconFile);

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.setContent(place.name);
        infowindow.open(map, this);
    });
}

$(document).ready(function() {
    showSection(WHAT);


    $('#Button-link').click( function(){
        showSection(WHERE);
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(success);
        } else {
            error('Geo Location is not supported');
        }
    });

    $('#What-link').click( function(){
        showSection(WHAT);
    });


    $('#Who-link').click( function() {
        showSection(WHO);
        if (typeof restaurants_nearby !== 'undefined' && restaurants_nearby.length > 0 && first){
            restaurants_nearby.forEach( function(entry){
                console.log(entry['name']);
                $( "ol" ).append( '<li>'+entry['name']+'</li>' );
            });
            first = false;
        } else {
            console.log('failure');
        }
    });
    $('#Where-link').click( function(){
        showSection(WHERE);
       /* if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(success);
        } else {
            error('Geo Location is not supported');
        }*/
    });

});