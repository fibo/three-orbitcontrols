# three-orbitcontrols

> is the [three.js] OrbitControls from official repo examples

All credit goes to [OrbitControls.js][original_orbitcontrols] contributors.
I have just **stolen** the code and modified to export it as a module
so you can do something like

```javascript
var THREE = require('three')
var OrbitControls = require('three-orbitcontrols')

// Init THREE scene (add your code)

var camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
camera.position.z = 5

var renderer = new THREE.WebGLRenderer({ canvas })

var controls = new OrbitControls(camera, renderer.domElement)
controls.enableDamping = true
controls.dampingFactor = 0.25
controls.enableZoom = false
```

Please note that:

1. You call `OrbitControls` directly instead of `THREE.OrbitControls`
2. This package does not depend directly on [three.js], which is declared as a peer dependency, so to install you will do

```bash
npm install three three-orbitcontrols --save
```

License is the same as three.js, i.e. [MIT]

[original_orbitcontrols]: https://github.com/mrdoob/three.js/tree/master/examples/js/controls/OrbitControls.js "OrbitControls.js"
[three.js]: http://threejs.org/ "three.js"
[MIT]: https://github.com/mrdoob/three.js/blob/master/LICENSE "three.js license"
