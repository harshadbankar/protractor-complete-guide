var $protractorSnapshot = require('protractor-snapshot');
var $rimraf = require('rimraf'); // More inforation here : https://www.npmjs.com/package/rimraf
var $upTheTree = require('up-the-tree'); // More information here : https://www.npmjs.com/package/up-the-tree

exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['specs/spec.js'],

    protractorSnapshotOpts: {
        basename: '%resolution%/%suiteName%/%browser% - %specName%',

        // what resolution to turn back to after cycle(), [width, height, type]
        // type can be 'window' for outer window size, or 'viewport' for viewport size
        defaultResolution: [700, 700, 'window'],

        // supported resolutions, array of [width, height, type]
        // type can be 'window' for outer window size, or 'viewport' for viewport size
        resolutions: [
            [1366, 768, 'window'],
            [768, 1366, 'window'],
            [320, 568, 'viewport'],
            [568, 320, 'viewport'],
            [1024, 768, 'viewport'],
            [768, 1024, 'viewport']
        ]
    },
    beforeLaunch: function () {
      $rimraf.sync($upTheTree() + '/reports/protractor-snapshot');
    },
    onPrepare: function () {
        // For Jasmine V2 a reporter needs to be added to be able to access the suite/spec names 
        $protractorSnapshot.addReporter();

    }
};