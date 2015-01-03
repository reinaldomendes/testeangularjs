requirejs(['helloApp'], function (app) {
    app.service('customerService', function () {
        this.getCustomers = function () {
            return [
                {id: 1, name: "Reinaldo Mendes", "city": "Alvinópolis"},
                {id: 2, name: "Rafael Felício", 'city': "Alvinópolis"}
            ]
        }
    });
});