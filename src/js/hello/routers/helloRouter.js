requirejs(['helloApp'], function (app) {
    app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
           // $locationProvider.html5Mode(true);
            $routeProvider.when('/', {
                templateUrl: 'js/hello/partials/list.html',
                controller: 'SimpleController'
            }).when('/edit/:customer_id', {
                templateUrl: 'js/hello/partials/form.html',
                controller: 'SimpleController'
            }).when('/new', {
                templateUrl: 'js/hello/partials/form.html',
                controller: 'SimpleController'
            })
                    .otherwise({
                redirectTo: '/'
            });
        }]);    
});