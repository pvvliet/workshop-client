
angular.module('workshop').config(function($routeProvider)
{
    $routeProvider.when('/', { templateUrl: 'assets/partials/home.html', controller: 'HomeController' });
    $routeProvider.when('/register', { templateUrl: 'assets/partials/registration.html', controller: 'RegistrationController' });
    $routeProvider.when('/overview', { templateUrl: 'assets/partials/overview.html', controller: 'OverviewController' });
    // Voeg hier meer routes toe
    
    $routeProvider.otherwise({ redirectTo: '/' });
});
