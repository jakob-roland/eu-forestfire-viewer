import './style.css';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import ImageLayer from 'ol/layer/Image.js';
import ImageWMS from 'ol/source/ImageWMS.js';


const layers = [
  new TileLayer({
    /* extent: [-2755157,3123471,5009377,11753184], */
    source: new OSM({
      url: 'https://{a-c}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png'
    }),
  }),
  new ImageLayer({
    /* extent: [-2755157,3123471,5009377,11753184], */
    source: new ImageWMS({
      url: 'https://maps.effis.emergency.copernicus.eu/gwis',
      params: {
        'LAYERS': 'viirs.hs',
        'TIME': '2023-08-01/2023-08-31',
        'TILED' : 'true'
      }
    })
  })
];

const map = new Map({
  target: 'map',
  layers: layers,
  view: new View({
    center: [2850000, 5010000],
    zoom: 10
  })
});


