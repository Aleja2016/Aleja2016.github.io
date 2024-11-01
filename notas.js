// Se enumeraran las notas por medio del siguiente patron de símbolos: ¿¿ + numero

// *ORDER OF folders ofCOURSE:
// 1)basic
// 2)Realtime location.
// 3)Routing

//   *ULTIMO COMENTARIO:    ¿¿3

//! the url where are the layers demo is:
// https://leaflet-extras.github.io/leaflet-providers/preview/

// !En google maps: (the letter is after lirs=   in the url of layer)
  //   Hibrid:s,h;
  // satelite: s;-----> lyrs=s&x
  // streets:m;---->lyrs=m&x
  // terrain:p;

//   *ICON  WITH IMAGE:
// https://leafletjs.com/reference.html#icon


//!toGeoJSON convert object in a json in format of geojson!:

// FORM OBJECT:
// console.log(singleMarker.toGeoJSON());

// FORM STRING:
//   console.log(JSON.stringify(singleMarker.toGeoJSON()));

// GEOJSON.IO
// https://geojson.io

// *IMPORTANTE:
//  Los marcadores se posicionan a trevez de las coordenadas. Por lo cual no es necesario usar herramientas externas para posicionar marcadores, sin embargo son útiles.

// Cuando guardamos los archivos geojson cambiamos el formato y generamos una nueva variable en el archivo .js con
// this is the form of use geojson.call a var in .js file.this was made manueally

// in the folder real time location in the time function if we dont remove the marker maybe we can mark the ride, maybe this will be useefull in the future by measure of land.

// ******************************************************************
// ******************************************************************

// *LEAFLET ROUTING (RED CAR):

// we use a library called: leaflet routing machine:
// //https://github.com/perliedman/leaflet-routing-machine
////npm install --save leaflet-routing-machine
// documentation:
// //https://www.liedman.net/leaflet-routing-machine/

// ******************************************************************
// ******************************************************************
//  jquery cdn
// https://cdnjs.com/libraries/jquery

//!NEW FOR TO SELECT IN THE DOM:
////$(".coordinate").html(`Lat: ${e.latlng.lat}  Lng: ${e.latlng.lng}`);
// ¿PLUGIN:
// For costumize the print of map we has to use the library leaflet brouser print, the file leaflet.browser.print.min.js in the folder dist
// //https://github.com/Igor-Vladyka/leaflet.browser.print
// DOCUMENTATION:
// https://igor-vladyka.github.io/leaflet.browser.print/

// ¿PLUGIN:
////https://github.com/ljagis/leaflet-measure
// This plugin is for measure distances and calculate areas.
// DOCUMENTATION:
////https://github.com/ljagis/leaflet-measure?tab=readme-ov-file#readme
// https://ljagis.github.io/leaflet-measure/


// *BUSCADOR POR NOMBRE DE LEAFLET
// *LARGE GEOJOSN IN LEAFLET
// We need to use this repository, example in the folder vector_tiles:
////https://github.com/iamtekson/leaflet-geojson-vt


// *SIDE-BY-SIDE   COMPARADOR DE MAPAS LADO A LADO

// This is the url of github repository
////https://github.com/digidem/leaflet-side-by-side

// *MARKER CLUSTER (MUCHOS MARCADORES QUE APARECEN SEGUN EL ZOOM)

////https://github.com/Leaflet/Leaflet.markercluster


// this library is for open diferent types of file
////https://github.com/mapbox/leaflet-omnivore

// !LAST VIDEO OF GEODEV
// //https://github.com/GeoTIFF/georaster-layer-for-leaflet