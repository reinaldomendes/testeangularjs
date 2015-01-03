
/****
 * Requirejs config 
 * @param {type} param
 * 
 **/
require.config({
    baseUrl: 'js/lib',
    paths: {
        // the left side is the module ID,
        // the right side is the path to
        // the jQuery file, relative to baseUrl.
        // Also, the path should NOT include
        // the '.js' file extension. This example
        // is using jQuery 1.9.0 located at
        // js/lib/jquery-1.9.0.js, relative to
        // the HTML page.
        'underscore': 'underscore/underscore-min',
        'jquery': 'jquery/dist/jquery.min',
        'angular': 'angular/angular.min',
        'angular-route': 'angular-route/angular-route.min'

    },
    shim: {
        'angular': {
            'exports': 'angular'
        },
        'angular-route': {
            'deps': ['angular'],
            'exports': 'angular'
        }

    }
});

//wait don't execute bootstrap onload
window.name = "NG_DEFER_BOOTSTRAP!";

//define helloapp angular module
define('helloApp', ['angular', 'angular-route', 'underscore'], function () {
    var app = angular.module('helloApp', ['ngRoute']);
    //defer resume bootstrap
    setTimeout(function () {
        angular.resumeBootstrap();
    });    
    
    return app;
});
