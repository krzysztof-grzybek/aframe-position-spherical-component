import chai from 'chai';
import chaiShallowDeepEqual from 'chai-shallow-deep-equal';
import asyncForEach from 'async-for-each';

require('aframe');
require('../index.js');

import { createEntity } from './helpers';
import { positions } from './fixtures';

chai.use(chaiShallowDeepEqual);

suite('Component', function() {
  var el;

  setup(function() {
    el = createEntity();
  });

  test('sets proper position from object', function (done) {
    asyncForEach(positions, (pos, i, next) => {
      el.setAttribute('position-spherical', pos.spherical);
      setTimeout(()=> {
        chai.assert.shallowDeepEqual(el.object3D.position, pos.cartesian);
        next();
      });
    }, done)
  });

  test('sets proper position from string', function (done) {
    asyncForEach(positions, (pos, i, next) => {
      const spherical = pos.spherical;
      el.setAttribute('position-spherical', `${spherical.radius} ${spherical.phi} ${spherical.theta}`);
      setTimeout(()=> {
        chai.assert.shallowDeepEqual(el.object3D.position, pos.cartesian);
        next();
      });
    }, done)
  });

});
