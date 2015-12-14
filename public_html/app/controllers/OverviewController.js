
angular.module('workshop').controller('OverviewController', function($scope, userService)
{
    var construct = function()
    {
        userService.getAll(function(users)
        {
            $scope.users = users;
        });
    };
    
    construct();
});
