// Initialize the map and set its view to geographical limits of El Hierro
var map = L.map('map', {
  zoomControl: false,
  maxZoom: 18,
  minZoom: 0,
}).setView([40.459707, -3.424715], 15);

// Add a tile layer to the map (Mapbox Streets tile layer)
var osm = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
  attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
  '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
  'Imagery © <a href="http://mapbox.com">Mapbox</a>',
  id: 'mapbox.streets'
}).addTo(map);

var osm2 = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
  attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
  '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
  'Imagery © <a href="http://mapbox.com">Mapbox</a>',
  id: 'mapbox.streets',
  minZoom: 0,
  maxZoom: 9
});

//Layers-------------------------------------------------------------


var baseLayers = {
  "Open Street Maps": osm,
  "PNOA Máx. Actualidad": Spain_PNOA_Ortoimagen,
};

var overlayers = {
  "Catastro": Spain_Catastro,
  "Unidades administrativas": Spain_UnidadAdministrativa,
  "IGN Base": Spain_IGNBase,
};

L.control.layers(baseLayers, overlayers,{collapsed:false}).addTo(map);

//Control del minimapa
var miniMap = new L.Control.MiniMap(osm2, {toggleDisplay: true, position: 'bottomright'}).addTo(map);

L.control.scale({maxWidth: 100, metric: true, imperial: false, position: 'bottomleft'}).addTo(map);

map.addControl(new L.Control.Fullscreen({
  position: "topleft"
}));

L.control.mousePosition({position: 'bottomright'}).addTo(map);

//layers
