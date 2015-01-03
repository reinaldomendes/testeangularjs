/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
requirejs(['helloApp'], function (app) {
    app.controller('SimpleController',['$scope','customerService','$routeParams',"$filter", function ($scope, customerService, $routeParams, $filter) {        
        //without scope call on view
        this.getCustomers = function(){
            var orderBy = $filter('orderBy')
            return orderBy(customerService.getCustomers(),'name',false);
        };        
        //uses scope to bind a customer        
        $scope.customer = customerService.find($routeParams.customer_id);

        //does only redirect
        this.saveCustomer = function () {
            if(!$scope.customer.id){
                customerService.addCustomer($scope.customer);
            }
            $scope.customer = null;
            document.location.replace('#/');
        };
        
    }]);


});