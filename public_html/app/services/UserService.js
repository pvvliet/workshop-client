
angular.module('workshop').service('userService', function($http)
{
    var self = this;
    
    self.authenticate = function(onSuccess, onFailure)
    {
        var uri = '/api/users/me';
        
        $http.get(uri).success(onSuccess).error(function(message, status)
        {
            alert('Inloggen mislukt: ' + message);
        });
    };
    
    self.create = function(name, postcode, streetnumber, email, password, onCreated)
    {
        var uri = '/api/users';
        var data =
        {
            fullName: name,
            postcode: postcode,
            streetnumber: streetnumber,
            emailAddress: email,
            password: password
        };

        $http.post(uri, data).success(onCreated).error(function(message, status)
        {
            alert('Aanmaken mislukt: ' + message);
        });
    };
    
    self.getAll = function(onReceived)
    {
        var uri = '/api/users';
        
        $http.get(uri).success(onReceived).error(function(message, status)
        {
            alert('Ophalen mislukt: ' + message);
        });
    };
});
