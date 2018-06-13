require('aframe');
require('../index');

AFRAME.registerComponent('earth', {
  init: function() {
    this.initialPosition = [8, 1.57, 3.14];
  },

  tick: function() {
    this.initialPosition[2] += 0.01;
    this.el.setAttribute('position-spherical', this.initialPosition.join(' '));
  }
})
