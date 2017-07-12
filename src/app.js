import DefineMap from 'can-define/map/';
import route from 'can-route';
import 'can-route-pushstate';

import * as esriLoader from 'esri-loader';

const AppViewModel = DefineMap.extend({
  message: {
    value: 'Hello World!',
    serialize: false
  },
  title: {
    value: 'esri-map',
    serialize: false
  },
  data: {
    value: [{
      name: 'Peter',
      age: 16,
      favorite_food: 'Pizza',
      votes: 0
    }, {
      name: 'Phillip',
      age: 26,
      favorite_food: 'Pizza',
      votes: 0
    }, {
      name: 'Todd',
      age: 150,
      favorite_food: 'Ice Cream',
      votes: 0
    }, {
      name: 'Andy',
      age: 10,
      favorite_food: 'Pickles',
      votes: 0
    }, {
      name: 'Andrew',
      age: 24,
      favorite_food: 'Spaghetti',
      votes: 0
    }],
  },
  createMap(el) {
    esriLoader.dojoRequire(['esri/Map', 'esri/views/SceneView'], (Map, SceneView) => {
      var map = new Map({
        basemap: "streets",
        ground: "world-elevation"
      });
      var view = new SceneView({
        container: el,  // Reference to the DOM node that will contain the view
        map: map  // References the map object created in step 3
      });
    })
  }
});

export default AppViewModel;
