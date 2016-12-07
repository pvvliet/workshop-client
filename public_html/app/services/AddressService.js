
angular.module('workshop').service('addressService', function($http)
{
    var self = this;
    
    // Public function
    self.get = function(postcode, streetnumber, onRetrieved)
    {
        var url = 'http://api.postcodedata.nl/v1/postcode/'
            + '?postcode=' + postcode
            + '&streetnumber=' + streetnumber
            + '&ref=domeinnaam.nl'
            + '&type=json';
    
        $http.get(url).then(function(response)
        {
            var data = response.data;
            
            if (data.status === 'ok')
            {
                onRetrieved(data.details[0]);
            }
            else
            {
                handleError();
            }
        }, handleError);
    };
    
    // Private function
    var handleError = function()
    {
        alert('Adres kon niet worden opgehaald');
    };
});
