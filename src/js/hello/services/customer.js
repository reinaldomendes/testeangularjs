requirejs(['helloApp'], function (app) {
    "use strict";
    app.factory('customerService', function () {
        // private property
        // this can be edited by application on memory
        var _customers = [
            {id: 1, name: "Reinaldo Mendes", "city": "Alvinópolis"},
            {id: 2, name: "Rafael Felício", 'city': "Alvinópolis"}
        ];
        
        this.find = function(id){
            return _.find(_customers,function(o){return o.id == id;});
        };
        
        this.getCustomers = function () {
            return _customers;
        };
        
        //factory need return object
        return this;
    });
});