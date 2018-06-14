require('aframe');
require('../index');

AFRAME.registerComponent('earth', {
  init: function() {
    this.initialPosition = [12, 1.57, 3.14];
    this.initialRotation = [0, 0, 0];
  },

  tick: function() {
    this.initialPosition[2] += 0.005;
    this.initialRotation[0] -= 0.05;
    this.el.setAttribute('position-spherical', this.initialPosition.join(' '));
    this.el.setAttribute('rotation', this.initialRotation.join(' '));
  }
})
