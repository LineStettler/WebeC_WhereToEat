/**
 * Created by Line on 05/04/16.
 */
var WHAT = "#What";
var WHERE = "#Where";
var WHO = "#Who";

function showSection(id){

    $('section').hide();
    $(id).show();
}

$(document).ready(function() {

    showSection(what);

    $('#What-link').click( showSection(what));
    $('#Who-link').click( showSection(who));
    $('#Where-link').click( showSection(where));

});