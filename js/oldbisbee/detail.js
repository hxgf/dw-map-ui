define(["lib/gmap3.min", "lib/map-styles", "lib/markerwithlabel"], function(gmap3, map_styles, mwl) {

	var o = {


		show_map: function(coords){



		  var overlays = [];

/*
		  $.each(coords, function(k, v){

				var c = {

					overlay:{
					  latLng: v.latLng,
					  options:{
					    content:  '<div style="color:#000000; border:1px solid #FF0000; ' +
					              'background-color: #00FF00; width:200px; line-height:20px; ' +
					              'height: 20px; text-align:center">Hello World !</div>',
					    offset:{
					      y:-32,
					      x:12
					    }
					  }
					}

				};
		  	overlays.push(c);				  	
		  });
*/


// alert(JSON.stringify(overlays, null, 4));
      $('#map').gmap3({

        defaults:{ 
          classes:{
            Marker: MarkerWithLabel
          }
        },

        map:{
          options:{
            center:[31.442207,-109.915424],
            zoom: 18,
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
		        	if (data.data){
			        	window.location = data.data;
		        	}
		         }
		      }
        },

//				overlays



/*


    
        overlay: {
            latLng: [
                31.442046,
                -109.915899
            ],
            options: {
                content: '<div style="color:#000000; border:1px solid #FF0000; ' +
					              'background-color: #00FF00; width:200px; line-height:20px; ' +
					              'height: 20px; text-align:center">Hello World !</div>',
                offset: {
                    y: -32,
                    x: 12
                }
            }
        },

        overlay: {
            latLng: [
                31.442724,
                -109.914182
            ],
            options: {
                content: "<div >Hello World !</div>",
                offset: {
                    y: -32,
                    x: 12
                }
            }
        },
        overlay: {
            latLng: [
                31.44201,
                -109.916435
            ],
            options: {
                content: "<div >Hello World !</div>",
                offset: {
                    y: -32,
                    x: 12
                }
            }
        },
        overlay: {
            latLng: [
                31.442284,
                -109.915792
            ],
            options: {
                content: "<div >Hello World !</div>",
                offset: {
                    y: -32,
                    x: 12
                }
            }
        },
        overlay: {
            latLng: [
                31.446898,
                -109.913131
            ],
            options: {
                content: "<div >Hello World !</div>",
                offset: {
                    y: -32,
                    x: 12
                }
            }
        }
*/




      });


/*
				  $.each(coords, function(k, v){
				  	alert(v.data);




				  });
*/

		},

		init: function(coords){

			$.ajax({
			  type: "POST",
			  url: '/ajax/business-results/',
			  data: {

			  },
			  dataType: "json",
			  success: function (data) {
				  var coords = [];

				  $.each(data, function(k, v){

						var c = {
//							latLng: [v.lat, v.lon],
							address: v.address,
							data: v.data,
							options: { 
								icon: {
								  url: 'http://oldbisbee.com/media/img/marker-default.png',
/* 								  scaledSize: new google.maps.Size(35, 35) */
								},
							  labelAnchor: new google.maps.Point(-23, 33),
							  labelClass: "labels",
							  labelContent: v.title
							
							}  
						};
				  	coords.push(c);				  	
				  });
					o.show_map(coords);
			  }
			});

		}


	};

  return o;
});