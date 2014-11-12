define(['require', 'jquery', 'knockout', '../moduleB/ObjectDefinition', '../moduleA/ClientDataProxy'], function (require, $, ko) {
    var ViewModels;
    (function (ViewModels) {

        //Person View Model
        var PersonViewModel = function () {
            var self = this;
            self.Persons = ko.observableArray();
            self.Init = function () {
                var ObjectDefinition = require('./../moduleB/ObjectDefinition');
                var ClientDataProxy = require("./../moduleA/ClientDataProxy");
                var persons = ClientDataProxy.Session.getInstance().getPersons();
                var aux = ko.utils.arrayMap(persons, function (p) {
                    var person = new ObjectDefinition.Person();
                    person.init(p);
                    return person;
                });
                self.Persons.push.apply(self.Persons, aux);
            };

            return self;
        };

        ViewModels.PersonViewModel = PersonViewModel;

    })(ViewModels || (ViewModels = {}));
    return ViewModels;
});