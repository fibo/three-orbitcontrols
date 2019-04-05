# Development

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

