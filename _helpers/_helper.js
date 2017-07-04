'use strict';

var $snapshot = require('protractor-snapshot');

module.exports = {
    takeSnapshot: takeSnapshot,
    click: {
        submitRegisterForm: submitRegisterForm
    }
}

function takeSnapshot () {

    return $snapshot.cycle(function () {
        $snapshot.image();

        $snapshot.source();

    });

}

function submitRegisterForm () {
    return element(by.id('submitForm')).click();
}