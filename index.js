if (typeof AFRAME === 'undefined') {
  throw new Error('Component attempted to register before AFRAME was available.');
}

AFRAME.registerComponent('position-spherical', {
  schema: {
    default: { radius: 0, phi: 0, theta: 0 },

    parse: function (value) {
      if (typeof value === 'object') {
        return value;
      }

      return value.trim()
        .replace(/\s+/g, ' ')
        .split(' ')
        .reduce(function(acc, curr, i) {
          switch(i) {
            case 0: acc.radius = curr;
            break;
            case 1: acc.phi = curr;
            break
            case 2: acc.theta = curr;
            break;
          }

          return acc;
        }, {});
    },

    stringify: function (data) {
      return data.radius + ' ' + data.phi + ' ' + data.theta;
    }
  },

  update: function() {
    this.setPosition();
  },

  setPosition: function() {
    var spherical = new THREE.Spherical(
      this.data.radius,
      THREE.Math.degToRad(this.data.phi),
      THREE.Math.degToRad(this.data.theta)
    );
    var vector = new THREE.Vector3();

    vector.setFromSpherical(spherical);

    this.el.object3D.position.set(vector.x, vector.y, vector.z);
  },
});
