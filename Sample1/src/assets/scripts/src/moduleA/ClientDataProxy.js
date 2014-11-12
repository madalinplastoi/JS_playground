define(['require'], function (require) {
    var ClientDataProxy;
    (function (ClientDataProxy) {
        var Session = (function () {
            function Session() {
                if (Session._instance) {
                    throw new Error("Error: Instantiation failed: Use Session.getInstance() instead of new.");
                }
                Session._instance = this;
                Session.Persons = [{ 'id': 1, 'name': 'Jean Valjean', 'age': 99 }, { 'id': 2, 'name': 'Ponta Mitoman', 'age': 38 }, { 'id': 3, 'name': 'Klaus Vorba-Lunga', 'age': 52 }];
                console.log("Session initialiazed, resuming...");
            }

            Session.getInstance = function () {
                if (Session._instance === null) {
                    Session._instance = new Session();
                }
                return Session._instance;
            };

            Session.prototype.addPerson = function (person) {
                if (person != null) Session.Persons.push(person);
            };

            Session.prototype.getPersons = function () {
                console.log("Willreturn collection of persons.");
                return Session.Persons;
            };

            Session._instance = null;
            return Session;
        })();
        ClientDataProxy.Session = Session;
    })(ClientDataProxy || (ClientDataProxy = {}));
    return ClientDataProxy;
});