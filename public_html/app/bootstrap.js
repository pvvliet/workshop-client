
angular.module('workshop',
[
    'ngRoute'
    // Voeg hier meer modules toe
])
.config(function($httpProvider)
{
    $httpProvider.interceptors.push('requestService');

    if(!$httpProvider.defaults.headers.get)
    {
        $httpProvider.defaults.headers.get = {};
    }
})
.config(function($locationProvider)
{
    $locationProvider.html5Mode(true);
    $locationProvider.baseHref = '/';
});
// Voeg hier meer configuraties toe
