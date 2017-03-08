var callback = function(){},
    callbackName = 'gmapscallback'+(new Date()).getTime();
window[callbackName] = callback;

define(['http://maps.googleapis.com/maps/api/js?sensor=true&callback=' + callbackName], function(require, exports, module) {

return google.maps;

});