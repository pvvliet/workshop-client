
angular.module('workshop').service('userService', function($http)
{
    var self = this;
    
    self.create = function(name, postcode, streetnumber, street, city, email, onCreated)
    {
        // Nog te implementeren
        console.log('Send POST request for ' + name);
    };
});
