/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
requirejs(['helloApp'], function (app) {    
     app.controller('SimpleController', function ($scope, customerService, $routeParams) {
        $scope.customers = customerService.getCustomers();        
        $scope.customer_id = $routeParams.customer_id;        
        $scope.customer =  _.find($scope.customers,function(customer){return customer.id == $scope.customer_id});        
    });
            

});