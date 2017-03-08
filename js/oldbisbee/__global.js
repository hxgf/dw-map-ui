$(function(){

/*
// hide address bar on mobile
window.addEventListener("load",function() {
	setTimeout(function(){
		window.scrollTo(0, 1);
	}, 0);
});
*/

var ipad = false;
var iphone = false;
var icon_x = '';

if ($("body").hasClass('ipad')){
	ipad = true;
}
if ($("body").hasClass('iphone')){
	iphone = true;
/* 	icon_x = '-large'; */
}



	function search_exec(){
		var search_safe = encodeURIComponent($("#search_box input").val());
		window.location = 'http://oldbisbee.com/search/'+search_safe+'/';
	}













// clear_all();





var map_clicked = [];


	function show_map(coords, center, zoom, static_map){
	
	  $('#gmap').gmap3({
	
	    defaults: { 
	      classes:{
	        Marker: MarkerWithLabel
	      }
	    },
	
	    map: {
	      options:{
	        center: center,
	        zoom: zoom,
		      styles: gmapOldStyle,
		      mapTypeControl: false,
			    scrollwheel: false,
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


/*
MarkerLabel_.prototype.setVisible = function () {
    if (this.marker_.get("labelVisible")) {
        this.labelDiv_.style.display = this.marker_.getVisible() ? "block" : "none";
    } else {
        this.labelDiv_.style.display = "none";
    }
    this.eventDiv_.style.display = this.labelDiv_.style.display;
}




setTimeout(function(){
  $('#test').gmap3({
    clear: {
      name:["marker", "circle"],
      last: true
    }
  });
}, 2000);

*/


						var url = data.data;
						var id = data.id;

						if (ipad || iphone){



//							marker.setMap(null);
// fixit set all marker labels to invisible

							if (map_clicked.indexOf(id) > -1){
/*
									marker.set('labelVisible',false);	
								if ($(marker).children('.labels').is(':visible')){
*/
									marker.set('labelVisible',false);	
									window.location = url;									
/*
								}else{
									$(marker).children('.labels').show();
								}
*/
							}else{

		map_clicked = [];

    $('#gmap').gmap3({
      exec: {
        tag:"mapmarker",
        all:"true",
        func: function(data){
          // data.object is the google.maps.Marker object
          data.object.set('labelVisible',false);
        }
      }
    });


								marker.set('labelVisible',true);
								map_clicked.push(id);
							}




























						}else{
							if (url){
								window.location = url;
							}							
						}

					},
	
					mouseover: function(marker, event, context){
						if (!ipad && !iphone){
							marker.set('labelVisible',false);	
							marker.set('labelVisible',true);							
						}
		      },
		      mouseout: function(marker, event, context){
						if (!ipad && !iphone){
							marker.set('labelVisible',false);	
						}
		      }
	
	      }
	    },
	  });
	
		$("#gmap").removeClass('loading');
	
	}





	if ($("#gmap.std").length !== 0){

		$.ajax({
		  type: "POST",
		  url: '/ajax/business-results/',
		  data: {
				tags: $("#gmap").data('id'),
				search: $("#gmap").data('q')
		  },
		  dataType: "json",
		  success: function (data) {
			  var coords = [];
				if (data){
				  $.each(data, function(k, v){	
						var c = {
							latLng: [v.lat, v.lon],
//							tag: 'mapmarker',
		//								address: v.address,
							data: v.data,
	
	
	// fixit why is the location of all of the icons the same as the last in the array?
	// fixit stopped here
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
				// fixit center is different for home and tags pages
	// [31.442669,-109.916337] // tags

				var zoom = 18;
//				if (ipad || iphone){
//					zoom = 19;
//				}
				show_map(coords, [31.441873,-109.916133], zoom, false);
	
		  }
		});		

	}







	$("#search_button").on('click', function(e){
		$(this).toggleClass('active');
		$("#search_box").toggleClass('visible');
		$("#search_box input").focus();
	});
	
	$("#search_bg").on('click', function(e){
		$("#search_button").removeClass('active');
		$("#search_box").removeClass('visible');
	});

	$("#search_box input").on('keyup', function(e){
		if (e.keyCode == '27'){
			$("#search_button").removeClass('active');
			$("#search_box").removeClass('visible');
		}
		if (e.keyCode == '13'){
			search_exec();
		}		
	});

	$("#search_box button").on('click', function(e){
			search_exec();
	});
	
	
	$("#phone-current").on('click', function(e){
			$("#nav").toggleClass("visible");
	});


	$("#nav a").on('click', function(e){
			$("#nav").toggleClass("visible");
	});



	$("a[rel=gallery]").fancybox({
		'showNavArrows'	:	true
	});





	if ($("#gmap.gmap-detail").length !== 0){

	  var coords = [];

		var c = {
			latLng: [$("#gmap").data('lat'), $("#gmap").data('lon')],
			data: $("#gmap").data('href'),
			options: { 
				icon: {
				  url: 'http://oldbisbee.com/media/img/marker-'+$("#gmap").data('icon')+'.png',
				},
			  labelAnchor: new google.maps.Point(-23, 33),
			  labelClass: "labels",
			  labelContent: $("#gmap").data('address'),
			  labelVisible: true
			}  
		};
  	coords.push(c);	

		var zoom = 17;
/*
		if (ipad || iphone){
			zoom = 18;
		}
*/
		show_map(coords, [$("#gmap").data('lat'),$("#gmap").data('lon')], zoom, true);
	}























// fixit leaflet

	if ($("#map").length !== 0){


      var map = new L.Map('map', {
      	center: new L.LatLng(31.441873,-109.916133), 
      	zoom: 18,
				scrollWheelZoom: false
      });

      var googleLayer = new L.Google('ROADMAP');
      map.addLayer(googleLayer);




		$.ajax({
		  type: "POST",
		  url: '/ajax/business-results/',
		  data: {
				tags: $("#gmap").data('id'),
				search: $("#gmap").data('q')
		  },
		  dataType: "json",
		  success: function (data) {
				if (data){

				  $.each(data, function(k, v){	

console.log(v.title+': '+v.lat+' / '+v.lon+' ('+v.data+')');

						L.marker([v.lat, v.lon], { icon: L.icon({
					    iconUrl: 'http://oldbisbee.com/media/img/marker-'+v.icon+'.png',
					    shadowUrl: false,
					    iconSize:     [20, 20], // size of the icon
					    shadowSize:   [20, 20], // size of the shadow
					    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
					    shadowAnchor: [4, 62],  // the same for the shadow
					    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor				
						} ) }).addTo(map);


/*


PanTerra Gallery: 31.4416116 / -109.9159613 __global.js:391
Bisbee Antiques & Collectables: 31.4416807 / -109.916438 __global.js:391
Killer Bee Honey: 31.4418304 / -109.9158275 __global.js:391
Mimosa Market: 31.446506 / -109.913186 __global.js:391
Old Bisbee Brewing Company: 31.4428434 / -109.9135565 __global.js:391
Finders Keepers Antiques: 31.441819 / -109.917824 __global.js:391
Stock Exchange Saloon: 31.4434338 / -109.9139961 __global.js:391
Savory Spot: 31.441774 / -109.918229 __global.js:391
Chocolate: 31.4427749 / -109.9192092 __global.js:391
Copper City Inn: 31.4411491 / -109.9172071 __global.js:391
Divine Teas & Novelties: 31.4414872 / -109.9169579 __global.js:391
Ecoasis Sustainable Living Center: 31.4434479 / -109.9140855 __global.js:391
Warm Hands Therapeutics: 31.4420367 / -109.9154175 __global.js:391
Copper Queen Hotel: 31.4421039 / -109.9140501 __global.js:391
Bisbee Mini Museum of the Bizarre: 31.442369 / -109.914232 __global.js:391
Bisbee Mining & Historical Museum: 31.4198651 / -109.8859015 __global.js:391
Bisbee Restoration Museum: 31.44186 / -109.9164116 __global.js:391
Muheim Museum Heritage House: 31.4459862 / -109.9130663 __global.js:391
Queen Mine Tour: 31.4400229 / -109.9123978 __global.js:391
Historic Walking Tours: 31.4415792 / -109.9148677 __global.js:391
Lavender Jeep Tours: 31.4421039 / -109.9140501 __global.js:391
555 GRILL: 31.4431185 / -109.9201876 __global.js:391
Angela's: 31.4421039 / -109.9140501 __global.js:391
Apache Spring Cafe: 31.442384 / -109.9187746 __global.js:391
Bella Roma Pizza: 31.4417049 / -109.913479 __global.js:391
Bisbee Coffee Company: 31.4415792 / -109.9148677 __global.js:391
Bisbee Food Co-op & Deli: 31.430967 / -109.894562 __global.js:391
Bisbee Grille: 31.4415792 / -109.9148677 __global.js:391
Cafe Cornucopia: 31.4416276 / -109.9157777 __global.js:391
Cafe Roka: 31.4418792 / -109.9163177 __global.js:391
High Desert Market & Cafe: 31.443119 / -109.9201899 __global.js:391
Poco: 31.4418304 / -109.9158275 __global.js:391
St Elmo's Bar: 31.4431624 / -109.9140227 __global.js:391
Santiago's: 31.4421579 / -109.9140915 __global.js:391
Screaming Banshee Pizza and Wine Bar: 31.4430644 / -109.9200931 __global.js:391
55 Main Gallery: 31.4416364 / -109.9168194 __global.js:391
Acacia Art & Antiques: 31.441514 / -109.91735 __global.js:391
Atlanta Music & Books: 31.441567 / -109.916294 __global.js:391
Bisbee Art Home: 31.4413653 / -109.9171644 __global.js:391
Bisbee Bicycle Brothel: 31.4434518 / -109.9139417 __global.js:391
Blisbee: 31.4412688 / -109.917246 __global.js:391
Bisbee Olive Oil: 31.4423973 / -109.9140595 __global.js:391
Brewery Avenue Designs: 31.4131838 / -109.8772635 __global.js:391
Cloud Family Mercantile: 31.4420678 / -109.9155816 __global.js:391
Czar Jewelry: 31.4417425 / -109.9156805 __global.js:391
Devine M Designs: 31.4415184 / -109.9168851 __global.js:391
Exquisite Designs Originals Gallery: 31.4413235 / -109.9171486 __global.js:391
Gloria's Jewelry & Gemstones: 31.4411513 / -109.917505 __global.js:391
The Gold Shop: 31.441585 / -109.917215 __global.js:391
Jewelry Designs by Owen: 31.441741 / -109.916671 __global.js:391
K.G. Potters Shop: 31.443683 / -109.913966 __global.js:391
Metalmorphosis: 31.4414002 / -109.917472 __global.js:391
Miners & Merchants Antique Center: 31.4418011 / -109.9156585 __global.js:391
Optimo Custom Hatworks: 31.44152 / -109.9168821 __global.js:391
Paleface Trading Company: 31.4415792 / -109.9148677 __global.js:391
Sala Del Cobre: 31.4417443 / -109.9160954 __global.js:391
Sam Poe Gallery: 31.4416091 / -109.9159043 __global.js:391
Singletree: 31.4415395 / -109.9158889 __global.js:391
The Gift Shoppe: 31.4416464 / -109.9164816 __global.js:391
The Source Within: 31.441564 / -109.9161 __global.js:391
VIXEN Fine Art Metal Gallery: 31.4416464 / -109.9164816 __global.js:391
Belleza Fine Art Gallery: 31.4417443 / -109.9160954 __global.js:391
Indian Touch: 31.4417461 / -109.915861 __global.js:391
PSA Art Awakenings: 31.4415599 / -109.9166079 __global.js:391
Subway Gallery: 31.4416673 / -109.9161596 __global.js:391
Tang Gallery: 31.441567 / -109.91621 __global.js:391
Contessas Cosas: 31.4415488 / -109.9166682 __global.js:391
Nay Designs: 31.441564 / -109.9161 __global.js:391
Metallum Creations: 31.4414002 / -109.917472 __global.js:391
The Bisbee Royale: 31.4413874 / -109.9179509 __global.js:391
Acacia Art and Antiques: 31.441514 / -109.91735 __global.js:391
Va Voom: 31.4416814 / -109.9133757 __global.js:391
Made In Bisbee: 31.442594 / -109.9140225 __global.js:391
Kate Drew-Wilkinson Designs: 31.4415792 / -109.9148677 __global.js:391
Home Party Silver: 31.4418304 / -109.9158275 __global.js:391
Coppershop: 31.441729 / -109.9159484 __global.js:391
Frogs Unlimited: 31.4420367 / -109.9154175 __global.js:391
Shacti: 31.4420678 / -109.9155816 __global.js:391
Bisbee Trolley Tours: 31.4415792 / -109.9148677 __global.js:391
Copper Queen Library: 31.4416109 / -109.9155158 __global.js:391
Bisbee Visitor Center: 31.4415792 / -109.9148677
*/



				  });
				}	
		  }
		});

	}





/*
				
*/



/*
		var map = L.map('map', {
			scrollWheelZoom: false
		}).setView([31.441873,-109.916133], 17);
			L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
		}).addTo(map);
*/
	
/*
		L.marker([31.441873,-109.916133], {icon: L.icon({
	    iconUrl: '/media/img/marker-antiques.png',
	    shadowUrl: false,
	    iconSize:     [20, 20], // size of the icon
	    shadowSize:   [20, 20], // size of the shadow
	    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
	    shadowAnchor: [4, 62],  // the same for the shadow
	    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor				
		})}).addTo(map);
*/





	
	/*

.bindPopup("hi").openPopup()

			L.circle([51.508, -0.11], 500, {
				color: 'red',
				fillColor: '#f03',
				fillOpacity: 0.5
			}).addTo(map).bindPopup("I am a circle.");
	
			L.polygon([
				[51.509, -0.08],
				[51.503, -0.06],
				[51.51, -0.047]
			]).addTo(map).bindPopup("I am a polygon.");
	
	
			var popup = L.popup();
	
			function onMapClick(e) {
				popup
					.setLatLng(e.latlng)
					.setContent("You clicked the map at " + e.latlng.toString())
					.openOn(map);
			}
	
			map.on('click', onMapClick);
	
	


	}


*/



});