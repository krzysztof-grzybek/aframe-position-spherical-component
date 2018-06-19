export function createEntity () {
  var scene = document.createElement('a-scene');
  var entity = document.createElement('a-entity');

  scene.appendChild(entity);
  document.body.appendChild(scene);

  return entity;
}
