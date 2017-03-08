var gmapOldStyle = [
                    
//////////
// WATER
//////////
{
    featureType: "water",
    stylers: [
    {
        hue: "#00ffe0"
    },
    {
        saturation: -60
    },
    {
        lightness: 0
    }
    ]
},
                    
//////////
// General Landscape
//////////
{
    featureType: "landscape.man_made", // Set the ground color in cities
    elementType: "geometry",
    stylers: [
    {
        visibility: "on"
    },
    {
        hue: "#ffbf00"
    },
    {
        saturation: -100
    },
    {
        lightness: 50
    }
    ]
},
{
    featureType: "landscape.natural", // Set the ground color in cities
    elementType: "geometry",
    stylers: [
    {
        hue: "#bdff00"
    },
    {
        saturation: -35
    },
    {
        lightness: 100
    }
    ]
},
{
    featureType: "administrative", // Remove borders between buildings
    elementType: "labels",
    stylers: [
    {
        visibility: "on"
    },
    {
        saturation: -90
    },
    {
        lightness: 30
    }
    ]
},

{
    featureType: "administrative.neighborhood", // Remove neighborhood labels
    stylers: [
    {
        visibility: "off"
    }
    ]
},
{
    featureType: "landscape.man_made",
    elementType: "labels",
    stylers: [
    {
        visibility: "off"
    }
    ]
},

                    
//////////
// Point Of Interest
//////////
{
    featureType: "poi", // Remove borders between buildings
    elementType: "labels",
    stylers: [
    {
        visibility: "on"
    },
    {
        saturation: -90
    },
    {
        lightness: -30
    }
    ]
},

{
    featureType: "poi", // Remove borders between buildings
    elementType: "labels.text",
    stylers: [
    {
        visibility: "off"
    },
    {
        saturation: -90
    },
    {
        lightness: 30
    }
    ]
},

{
    featureType: "poi", // Remove borders between buildings
    elementType: "labels.icon",
    stylers: [
    {
        visibility: "off"
    },
    {
        saturation: -90
    },
    {
        lightness: 30
    }
    ]
},

                   
    {
        featureType: "poi.park",
		    elementType: "labels",
        stylers: [
		    {
		        visibility: "on"
		    },
        {
            hue: "#57ff00"
        },
{
            saturation: -30
        },
{
            lightness: 20
        }
        ]
    },


                   
    {
        featureType: "poi.park",
		    elementType: "labels.text.stroke",
        stylers: [
		    {
		        visibility: "off"
		    },
        ]
    },


                    
                   
                    
//////////
// Roads
//////////
{ 
    featureType: "road", 
    elementType: "labels",
    stylers: [ 
    {
        hue: "#000000"
    },
    {
        saturation: -100
    },
    {
        gamma: 1
    },
    {
	    lightness: 45
    },
    {
        visibility: "on"
    },
    ]
},

{ 
    featureType: "road", 
    elementType: "labels.text.stroke",
    stylers: [ 
    {
        visibility: "off"
    },
    ]
},


                    
{
    featureType: "road.arterial",
    elementType: "geometry",
    stylers: [
    {
        visibility: "on"
    },
    {
        saturation: -100
    },
    {
        hue: "#00fff7"
    },
    {
        lightness: 20
    }
    ]
},
{
    featureType: "road.arterial",
    elementType: "labels",
    stylers: [
    {
        visibility: "simplified"
    },
    {
        saturation: -100
    },
    {
        hue: "#00fff7"
    },
    {
        lightness: 20
    }
    ]
},

{ 
    featureType: "road.local", 
    elementType: "geometry",
    stylers: [
    {
        visibility: "simplified"
    },
    {
        saturation: -100
    },
    {
        hue: "#00fff7"
    },
    {
        lightness: -15
    }
    ]
},

{ 
    featureType: "road.local", 
    elementType: "labels",
    stylers: [ 
                            
    ]
},
{
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [
    {
        visibility: "off"
    },
    ]
},
{
    featureType: "road.highway",
    elementType: "labels",
    stylers: [
    {
        visibility: "off"
    },
    {
        saturation: 30
    },
    {
        hue: "#ff0e00"
    },
    {
        lightness: 0
    }
    ]
},
{
    featureType: "transit",
    stylers: [
    {
        visibility: "off"
    }
    ]
},
]; // End of style array


