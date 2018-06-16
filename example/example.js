require('aframe');
require('../index');

AFRAME.registerComponent('earth', {

  tick: function() {
    this.position.theta += 0.1;
    this.rotation.y += 0.003;
    this.el.setAttribute('position-spherical', this.position);
    this.el.object3D.rotation.set(this.rotation.x, this.rotation.y, this.rotation.z);
  },
  init: function() {
    this.position = { radius: 12, phi: 90, theta: 180 };
    this.rotation = { x: 0, y: 0, z: 0 };
  }
});
