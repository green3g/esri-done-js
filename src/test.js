import F from 'funcunit';
import QUnit from 'steal-qunit';

import 'esri-map/models/test';

F.attach(QUnit);

QUnit.module('esri-map functional smoke test', {
  beforeEach() {
    F.open('./development.html');
  }
});

QUnit.test('esri-map main page shows up', function() {
  F('title').text('esri-map', 'Title is set');
});
