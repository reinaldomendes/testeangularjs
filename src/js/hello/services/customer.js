requirejs(['helloApp'], function (app) {
    "use strict";
    app.factory('customerService', ['$filter', function ($filter) {
            // private property
            // this can be edited by application on memory
            var _customers = [];//

            //load from localstorage if exists
            var json = localStorage.getItem('customers');
            if (json) {
                _customers = angular.fromJson(json);
            }


            //private save to localstorage
            function _sync() {
                var toJson = $filter('json');
                localStorage.setItem('customers', toJson(_customers));
            }


            //find customber by id
            this.find = function (id) {
                return _.find(_customers, function (o) {
                    return o.id == id;
                });
            };
            //find or create blank object
            this.findOrNew = function (id) {
                var val = this.find(id);
                if (val === undefined) {
                    val = {};
                }
                ;
                return val;
            };

            //add new customer and sync to localstorage
            this.saveCustomer = function (object) {
                if (!object.id) {
                        object.id = 1
                    if ( ! _.isEmpty(_customers)) {
                        object.id = _.max(_customers, function (o) {
                            return o.id;
                        }).id + 1;
                    }
                    _customers.push(object);
                }
                _sync();
            };

            this.getCustomers = function () {
                return _customers;
            };

            ///////


            //factory need return object
            return this;
        }]);
});