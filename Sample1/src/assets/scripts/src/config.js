(function (requirejs) {
    'use strict';

    require.config({
        baseUrl: 'assets/scripts/src',
        paths: {
            jquery: './../lib/jquery/jquery-1.9.1',
            knockout: './../lib/knockout/knockout-2.2.0',
            templates: '../../templates',
            data: '../../data s'
        },
        shim: {
            jquery: {
                exports: '$'
            },
            knockout: {
                exports: 'ko'
            }
        }
    });

    requirejs.onError = function (err) {
        console.log(err);
    };

    var start = new Date();

    requirejs.onResourceLoad = function (context, map, depArray) {
        var duration = new Date() - start;
        console.log("onResourceLoad", map.name, "in" + duration + "ms");
    };

})(requirejs);