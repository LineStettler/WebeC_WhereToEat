/**
 * Created by Line on 05/04/16.
 */


function showSection(id){

    $("#What").hide();
    $("#Where").hide();
    $("#Who").hide();
    id.show();
}

$(document).ready(function() {
    /*var what = $("#What");
    var where = $("#Where");
    var who = $("#Who");
    showSection(what);

    $('#What-link').click( showSection($('#What')));
    $('#Who-link').click( showSection($('who')));
    $('#Where-link').click( showSection('where'));*/

    $("#What").hide();
    $("#Where").hide();
    $("#Who").hide();
    $("#What").show();

    $('#What-link').click( function() {
        $("#What").hide();
        $("#Where").hide();
        $("#Who").hide();
        $("#What").show();
    });


    $('#Where-link').click(function() {
        $("#What").hide();
        $("#Where").hide();
        $("#Who").hide();
        $("#Where").show();
    });

    $('#Who-link').click(function() {
        $("#What").hide();
        $("#Where").hide();
        //$("#Who").hide();
        $("#Who").show();
    });
});