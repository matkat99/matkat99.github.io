jQuery(document).ready(function ($) {

    function ajaxFromLocalJson(locationToGrab) {
        $.ajax({
            url: "../js/weather.json",
            dataType: "json",
            success: function (data) {
                console.log(data);
                var location = data[locationToGrab]['City'];
                var state = data[locationToGrab]['State'];
                var temp_f = data[locationToGrab]['High'];

                console.log("Current temperature in " + location + " is: " + temp_f);

                var cur_location = $("#location");
                var temp = $("#temp");
                var message = $("#message");


                cur_location.text(location + ', ' + state);
                temp.text(temp_f);
                message.text("Current temperature in " + location + " is: " + temp_f);

            }
        });
    }

    function ajaxFromApi() {
        $.ajax({
            url: "//api.wunderground.com/api/ba65310ed0498c0c/geolookup/conditions/q/ID/Rexburg.json",
            dataType: "jsonp",
            success: function (data) {
                console.log(data);
                var location = data['location']['city'];
                var temp_f = data['current_observation']['temp_f'];
                alert("Current temperature in " + location + " is: " + temp_f);
            }
        });
    }
    
        
    ajaxFromLocalJson("Franklin");
    ajaxFromApi();
    
});