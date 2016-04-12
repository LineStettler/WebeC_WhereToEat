/**
 * Created by Line on 05/04/16.
 */
var WHAT = "#What";
var WHERE = "#Where";
var WHO = "#Who";

function showSection(id){
    console.log('test');
    $('section').hide();
    $(id).show();
}

function success(position) {
    var mapcanvas = document.createElement('div');
    mapcanvas.id = 'mapcontainer';
    mapcanvas.style.height = '550px';
    mapcanvas.style.width = '500px';

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
    var map = new google.maps.Map(document.getElementById("mapcontainer"), options);

    var marker = new google.maps.Marker({
        position: here,
        map: map,
        title:"You are here!"
    });
}



$(document).ready(function() {
    showSection(WHAT);

    $('#What-link').click( function(){
        showSection(WHAT);
    });

    $('#Who-link').click( function() {
        showSection(WHO);
    });
    $('#Where-link').click( function(){
        showSection(WHERE);
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(success);
        } else {
            error('Geo Location is not supported');
        }
    });

});