requirejs(['helloApp'], function (app) {
    app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
           // $locationProvider.html5Mode(true);
            $routeProvider.when('/', {
                templateUrl: 'js/hello/partials/view1.html',
                controller: 'SimpleController'
            }).when('/edit/:customer_id', {
                templateUrl: 'js/hello/partials/edit.html',
                controller: 'SimpleController'
            })
                    .otherwise({
                redirectTo: '/'
            });
        }]);    
});