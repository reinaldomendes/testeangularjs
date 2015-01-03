/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
requirejs(['helloApp'], function (app) {
    app.controller('SimpleController',['$scope','customerService','$routeParams', function ($scope, customerService, $routeParams) {        
        //without scope call on view
        this.getCustomers = function(){
            return customerService.getCustomers();
        };
        
        //uses scope to bind a customer        
        $scope.customer = customerService.find($routeParams.customer_id);

        //does only redirect
        this.editCustomer = function () {
            document.location.replace('#/');
        };
        
    }]);


});