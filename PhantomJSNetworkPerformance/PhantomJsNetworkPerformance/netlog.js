"use strict";
var page = require('webpage').create(),
    system = require('system'),
    address;

if (system.args.length === 1) {
    console.log('Usage: netlog.js <some URL>');
    phantom.exit(1);
} else {
    address = system.args[1];

    page.onResourceRequested = function (req) {
        console.log('Request (#' + requestData.id + '): ' + JSON.stringify(requestData));
        //console.log('requested: ' + JSON.stringify(req, undefined, 4));
    };

    var count = 0;

    page.onResourceReceived = function (res) {
        if (res.stage == 'end')
            count++;
        console.log('Response (#' + res.id + '): ' + res.stage + 'Status: ' + res.statusText + ' URL: '+ res.url)
        //console.log('received: ' + JSON.stringify(res, undefined, 4));
    };

    page.onResourceError = function (resourceError) {
        console.log('Unable to load resource (#' + resourceError.id + 'URL:' + resourceError.url + ')');
        console.log('Error code: ' + resourceError.errorCode + '. Description: ' + resourceError.errorString);
    };


    page.clearMemoryCache();
    page.settings.clearMemoryCaches = true;

    page.open(address, function (status) {
        if (status !== 'success') {
            console.log('FAIL to load the address');
        }

        console.log('count is ' + count);

        phantom.exit();
    });
}

