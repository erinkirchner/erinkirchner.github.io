$(document).ready(function() {

    clearBox();
	init();
    
});

/*$.ajax(
	type: 'GET',
	url:"http://www.mapquestapi.com/directions/v2/route?key=Fmjtd%7Cluurnuutnh%2Cbn%3Do5-9wr05a&from=Lancaster,PA&to=Melrose,WI&callback=renderNarrative",
	success: function() {

	}
	dataType: 'jsonp'
	);
*/
function init () {
    $('#policy').on("click", function() {
       
        $('#policyContent').slideDown(1000);
    });

    $('#location').on("click", function() {
        
        $('#contactContent').slideDown(1000);
    });
    $('#about').on("click", function() {

        $('#aboutContent').slideDown(1000);
    });
    $('#picSliderWrap').on("click", function() {
        $(this).toggleClass("picSliderWrapOut", 1000, "slide");
    });
}

function clearBox () {
    $("a.listStyle").on("click", function() {
        $('#policyContent').slideUp();
        $('#contactContent').slideUp();
        $('#aboutContent').slideUp();
    });
}


            MQA.EventUtil.observe(window, 'load', function() {
                var options = {
                    elt: document.getElementById('map'),            // ID of map element on page
                    zoom: 7,                                        // initial zoom level of the map
                    latLng: { lat: 44.091019, lng: -91.117909 }     // center of map in latitude/longitude
                };

                // construct an instance of MQA.TileMap with the options object
                window.map = new MQA.TileMap(options);

                // download the modules
                MQA.withModule('new-route', 'smallzoom', 'mousewheel', function() {
                    var stp = "#startBox",
                    var opt = {
                        request: {
                            locations: [ stp, 'N639 Back St., Melrose, WI' ],

                            options: {
                                avoids: [],
                                avoidTimedConditions: false,
                                doReverseGeocode: true,
                                shapeFormat: 'raw',
                                generalize: 0,
                                routeType: 'fastest',
                                timeType: 1,
                                locale: 'en_US',
                                unit: 'm',
                                enhancedNarrative: true,
                                drivingStyle: 2,

                                highwayEfficiency: 21.0

                            }
                        },

                        display: {
                            color: '#800000',
                            borderWidth: 10
                        },

                        // on success, display the route narrative
                        success: function displayNarrative(data) {
                            if (data.route) {
                                var legs = data.route.legs,
                                    html = '',
                                    i = 0,
                                    j = 0,
                                    trek,
                                    maneuver;

                                html += '<table><tbody>';

                                for (; i<legs.length; i++) {
                                    for (j=0; j<legs[i].maneuvers.length; j++) {
                                        maneuver = legs[i].maneuvers[j];
                                        html += '<tr>';
                                        html += '<td>';

                                        if (maneuver.iconUrl) {
                                            html += '<img src="' + maneuver.iconUrl + '" />  ';
                                        }

                                        for (k=0; k<maneuver.signs.length; k++) {
                                            var sign = maneuver.signs[k];

                                            if (sign && sign.url) {
                                                html += '<img src="' + sign.url + '" />  ';
                                            }
                                        }

                                        html += '</td><td>' + maneuver.narrative + '</td>';
                                        html += '</tr>';
                                    }
                                }

                                html += '</tbody></table>';
                                document.getElementById('route-results').innerHTML = html;
                            }
                        }
                    }

                    map.addRoute(opt);

                    map.addControl(new MQA.SmallZoom());
                    map.enableMouseWheelZoom();
                });
            });
