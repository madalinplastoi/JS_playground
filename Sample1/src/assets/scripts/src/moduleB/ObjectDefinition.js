define(['require', 'knockout'], function (require, ko) {
    return {

        //Person Definition
        Person: function(){
            var self = this;
            self.Id = '';
            self.Name = ko.observable('');
            self.Age = ko.observable(0);

            self.init = function (data) {
                if (data != null) {
                    self.Id = data.id;
                    self.Name(data.name);
                    self.Age(data.age);

                    console.log("Person initialiazed from domain object, will return Person.");
                }
            };

            return self;
        }
    };
});