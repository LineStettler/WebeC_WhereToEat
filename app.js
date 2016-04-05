/**
 * Created by Line on 05/04/16.
 */

$(document).ready(function() {

    $('#Where').hide();
    $('#Who').hide();

    $('#Where-link').onclick(function(){
        $("#What").hide();
        $("#Where").show();
        $("#Who").hide();
    }
    $('#What-link').onclick(function(){
            $("#What").show();
            $("#Where").hide();
            $("#Who").hide();
        }
    );
    $('#Who-link').onclick(function(){
            $("#What").hide();
            $("#Where").hide();
            $("#Who").show();
        }
    );

}