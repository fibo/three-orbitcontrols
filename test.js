const assert = require('assert')

const { version, peerDependencies } = require('./package.json')

const minorVersion = version.split('.')[1]

assert.equal(peerDependencies.three, `>= 0.${minorVersion}`, 'minor version is the same as threejs release')
