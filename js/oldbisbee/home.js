/*
define([
        'image!awsum.jpg',
        'json!data/foo.json',
        'noext!js/bar.php',
        'mdown!data/lorem_ipsum.md',
        'async!http://maps.google.com/maps/api/js?sensor=false',
        'goog!visualization,1,packages:[corechart,geochart]',
        'goog!search,1',
        'font!google,families:[Tangerine,Cantarell]'
    ], function(awsum, foo, bar, loremIpsum){
        //all dependencies are loaded (including gmaps and other google apis)




	var o = {
	
		init: function(){
		

alert(awsum);
		}
	}


  return o;
    }
);
*/





/*


                    var mapDiv = document.getElementById('map-canvas');

                    var map = new google.maps.Map(mapDiv, {
                        center: new google.maps.LatLng(37.4419, -122.1419),
                        zoom: 13,
                        mapTypeId: google.maps.MapTypeId.ROADMAP,
                        navigationControl: true,
                        navigationControlOptions: {
                            style: google.maps.NavigationControlStyle.SMALL
                        }
                    });
*/






/* define(["lib/gmap-amd", "lib/gmap3", "lib/map-styles", "lib/markerwithlabel"], function(gmap, gmap3, map_styles, mwl) { */


define([
	'async!http://maps.google.com/maps/api/js?sensor=false',
], function(google){

	var o = {

		show_map: function(coords){

      $('#map').gmap3({

        defaults: { 
          classes:{
            Marker: MarkerWithLabel
          }
        },

        map: {
          options:{
            center:[31.44176,-109.916475],
            zoom: 19,
			      styles: gmapOldStyle,
			      mapTypeControl: false,
					  zoomControl: true,
					  panControl: false,
				    streetViewControl: false,
          }
        },

        marker:{
          values: coords,
          events: {
						click: function(marker, event, data) { 
							// fixit only do this on the second click if it's a touch device
							if (data.data){
								window.location = data.data;
							}
						},

						mouseover: function(marker, event, context){
							marker.set('labelVisible',true);
			      },
			      mouseout: function(marker, event, context){
							marker.set('labelVisible',false);	
			      }

		      }
        },
      });

			$("#map").removeClass('loading');

		},

		init: function(coords){

        var mapDiv = document.getElementById('map-canvas');

/*
        var map = new google.maps.Map(mapDiv, {
            center: new google.maps.LatLng(37.4419, -122.1419),
            zoom: 13,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            navigationControl: true,
            navigationControlOptions: {
                style: google.maps.NavigationControlStyle.SMALL
            }
        });
*/

				alert(typeof(google));

/*
			$.ajax({
			  type: "POST",
			  url: '/ajax/business-results/',
			  data: {
					tags: $("#map").data('id'),
					search: $("#map").data('q')
			  },
			  dataType: "json",
			  success: function (data) {
				  var coords = [];
					if (data){
					  $.each(data, function(k, v){	
							var c = {
								latLng: [v.lat, v.lon],
//								address: v.address,
								data: v.data,
								options: { 
									icon: {
									  url: 'http://oldbisbee.com/media/img/marker-'+v.icon+'.png',
//									  scaledSize: new google.maps.Size(35, 35)
									},
								  labelAnchor: new google.maps.Point(-23, 33),
								  labelClass: "labels",
								  labelContent: v.title,
								  labelVisible: false
								}  
							};
					  	coords.push(c);				  	
					  });
//						console.log(coords);

					}

					o.show_map(coords);



			  }
			});
*/

		}


	};

  return o;
});