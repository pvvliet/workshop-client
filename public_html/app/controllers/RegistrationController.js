
angular.module('workshop').controller('RegistrationController', function($scope, addressService, userService)
{
    $scope.checkAddress = function()
    {
        addressService.get($scope.postcode, $scope.streetnumber, function(address)
        {
            $scope.street = address.street;
            $scope.city = address.city;
        });
    };
    
    $scope.register = function()
    {
        userService.create(
            $scope.name,
            $scope.postcode,
            $scope.streetnumber,
            $scope.email,
            $scope.password,
            userCreated
        );
    };
    
    var userCreated = function()
    {
        alert('Uw account is aangemaakt, u kunt nu inloggen');
        $scope.gotoHome();
    };
});
