
angular.module('workshop',
[
    'ngRoute'
    // Voeg hier meer modules toe
])
.config(function($locationProvider)
{
    $locationProvider.html5Mode(true);
});
// Voeg hier meer configuraties toe
