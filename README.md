# three-orbitcontrols

> is the [three.js] OrbitControls from official repo examples

## Installation

To install with npm do

```bash
npm install three
npm install three-orbitcontrols
```

## Usage

All credit goes to [OrbitControls.js][original_orbitcontrols] contributors.
See also [official OrbitControls documentation][orbitcontrols_documentation].

I have just **stolen** the code and modified to export it as a module so you can do something like

```javascript
const THREE = require('three')
const OrbitControls = require('three-orbitcontrols')
// ES6 also works, i.e.
// import OrbitControls from 'three-orbitcontrols'

// Init THREE scene (add your code)

const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
camera.position.z = 5

const renderer = new THREE.WebGLRenderer({ canvas })

const controls = new OrbitControls(camera, renderer.domElement)
controls.enableDamping = true
controls.dampingFactor = 0.25
controls.enableZoom = false
```

Please note that:

1. You call `OrbitControls` directly instead of `THREE.OrbitControls`.
2. This package does not depend directly on [three.js], which is declared as a peer dependency.

See also [examples/ folder](https://github.com/fibo/three-orbitcontrols/tree/master/examples):

- [CommonJS example](https://github.com/fibo/three-orbitcontrols/tree/master/examples/CommonJS)
- [TypeScript example](https://github.com/fibo/three-orbitcontrols/tree/master/examples/TypeScript)


## Motivation

There is another package similar to this one: [three-orbit-controls].
I decided to create another package with a different approach, see [this issue for the rationale](https://github.com/mattdesl/three-orbit-controls/issues/17).

I am using this package for my [3d tic tac toe](http://tris3d.net) online game.

## How to update code

To update *OrbitControls.js* code follow instructions below.

First of all, target latest three.js release number, for instance do

```bash
THREEJS_RELEASE=96
```

which will set the download URL to something like

```bash
wget https://raw.githubusercontent.com/mrdoob/three.js/r96/examples/js/controls/OrbitControls.js
```

Now you can launch

```bash
rm OrbitControls.js* # clean up previous files
wget https://raw.githubusercontent.com/mrdoob/three.js/r${THREEJS_RELEASE}/examples/js/controls/OrbitControls.js -O OrbitControls.js.new
echo "/* three-orbitcontrols addendum */ var THREE = require('three');" > OrbitControls.js
cat OrbitControls.js.new >> OrbitControls.js
echo "/* three-orbitcontrols addendum */ module.exports = exports.default = THREE.OrbitControls;" >> OrbitControls.js
rm OrbitControls.js.new # clean up downloaded file
```

Note that minor version in this package is in sync with three.js minor version, i.e. release number.
Also update `peerDependencies` attribute in *package.json* with latest three.js version.
There is a test that checks version numbers are in sync.

When you are done, launch

```bash
npm run deploy
```

## License

License is the same as [three.js], i.e. [MIT].

[original_orbitcontrols]: https://github.com/mrdoob/three.js/tree/master/examples/js/controls/OrbitControls.js "OrbitControls.js"
[orbitcontrols_documentation]: https://threejs.org/docs/#examples/controls/OrbitControls "OrbitControls documentation"
[three.js]: http://threejs.org/ "three.js"
[MIT]: https://github.com/mrdoob/three.js/blob/master/LICENSE "three.js license"
[three-orbit-controls]: https://www.npmjs.com/package/three-orbit-controls "three-orbit-controls"
