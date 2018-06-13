if (typeof AFRAME === 'undefined') {
  throw new Error('Component attempted to register before AFRAME was available.');
}

AFRAME.registerComponent('position-spherical', {
  schema: {
    default: [0, 0, 0], // radius, phi, theta

    parse: function (value) {
      if (Array.isArray(value)) {
        return value;
      }

      return value.trim().replace(/\s+/g, ' ').split(' ');
    },

    stringify: function (data) {
      return data.join(' ');
    }
  },

  update: function() {
    this.setPosition();
  },

  setPosition: function() {
    var spherical = new THREE.Spherical();
    var vector = new THREE.Vector3();

    spherical.radius = this.data[0];
    spherical.phi = this.data[1];
    spherical.theta = this.data[2];

    vector.setFromSpherical(spherical);

    this.el.object3D.position.set(vector.x, vector.y, vector.z);
  },
});
