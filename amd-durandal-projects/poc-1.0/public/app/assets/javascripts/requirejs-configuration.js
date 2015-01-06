/**
 * Created by madalin on 1/2/2015.
 */
(function (requirejs) {
    'use strict';

    requirejs.config({
        paths: {
            'text': '../../../lib/require/text',
            'durandal': '../../../lib/durandal/js',
            'plugins': '../../../lib/durandal/js/plugins',
            'transitions': '../../../lib/durandal/js/transitions',
            'knockout': '../../../lib/knockout/knockout-3.1.0',
            'bootstrap': '../../../lib/bootstrap/js/bootstrap',
            'jquery': '../../../lib/jquery/jquery-1.9.1',
            'salary-assignment-module': 'salaryassignment/SalaryAssignment'
        },
        shim: {
            'knockout':{
                exports: 'ko'
            },
            'bootstrap': {
                deps: ['jquery'],
                exports: 'jQuery'
            }
        }
    });

    requirejs.onError = function (err) {
        console.log(err);
    };

    /***************************************************************************************************
     * Start loading each module and its dependencies.
     */
    var start = new Date();

    requirejs.Plugin = null;

    requirejs(['plugins/http'], function(http) {
        requirejs.Plugin = http;
        requirejs(['./AppBoot'], function (appReference) {
            appReference.AppBoot.getInstance();
        })
    });

    requirejs.onResourceLoad = function (context, map, depArray) {
        var duration = new Date() - start;
        console.log("[Resources Loaded]:", map.name, "in " + duration + " ms" + " from " + map.url);
    };

})(requirejs);

