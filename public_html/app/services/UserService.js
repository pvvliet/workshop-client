
angular.module('workshop').service('userService', function($http)
{
    var self = this;
    
    self.authenticate = function(onSuccess)
    {
        var uri = '/api/users/me';
        
        $http.get(uri).then(function(response)
        {
            onSuccess(response.data);
        },
        function(message, status)
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

        $http.post(uri, data).then(function(response)
        {
            onCreated(response.data);
        },
        function(message, status)
        {
            alert('Aanmaken mislukt: ' + message);
        });
    };
    
    self.getAll = function(onReceived)
    {
        var uri = '/api/users';
        
        $http.get(uri).then(function(response)
        {
            onReceived(response.data);
        },
        function(message, status)
        {
            alert('Ophalen mislukt: ' + message);
        });
    };
});
