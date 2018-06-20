# aframe-position-spherical-component
Simple utility to position entity with <a href="https://en.wikipedia.org/wiki/Spherical_coordinate_system" target="_blank">spherical coordinate system</a>.

### Usage

```bash
npm install aframe-position-spherical-component
```

```js
require('aframe');
require('aframe-position-spherical-component');
```

```html
<a-box position-shperical="12 90 45"></a-box>
```

```js
var box = document.querySelector('a-box');
box.setAttribute('position-spherical', { radius: 12, phi: 90, theta: 45 });
```

### Values

| Type              | Description                                                                                                                                   |
|-------------------|-----------------------------------------------------------------------------------------------------------------------------------------------|
| string            | String in format: `${radius} ${phi} ${theta}`.                                                                                                |
| custom | Object with coordinates properties: <ul><li>`radius: number` - distance in meters</li><li>`phi: number` - phi angle in degrees</li><li>`theta: number` - theta angle in degrees</li></ul> |

### Example

<a href="https://krzysztof-grzybek.github.io/aframe-position-spherical-component/example/" target="_blank">
https://krzysztof-grzybek.github.io/aframe-position-spherical-component/example/
</a>
