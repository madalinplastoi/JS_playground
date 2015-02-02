/**
 * Created by madalin on 12/17/2014.
 */
(function (requirejs) {
    'use strict';

    // -- RequireJS config --
    requirejs.config({

        baseUrl: 'assets/scripts/',

        paths: {

            "jquery": ['./lib/jquery/jquery.min'],

            "knockout": ['./lib/knockout/knockout'],

            "appBoot": ['./app/appBoot'],

            "appMessenger": ['./app/Messaging'],

            "appCommon": ['./app/common/appCommon']
        },

        shims: {

            "jquery": ["$"],

            "knockout": ["ko"]
        }
    });

    var start = new Date();
    requirejs.onResourceLoad = function (context, map, depArray) {
        var duration = new Date() - start;
        console.log("[Resources Loaded]:", map.name, "in " + duration + " ms" + " from " + map.url);
    };
    requirejs.onError = function (err) {
        console.log(err);
    };

    requirejs(['appBoot']);

})(requirejs);