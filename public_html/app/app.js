
(function()
{
    // Applicatie
    addScript('app/bootstrap.js');
    addScript('app/routes.js');

    // Services
    addScript('app/services/AddressService.js');
    addScript('app/services/UserService.js');

    // Controllers
    addScript('app/controllers/AppController.js');
    addScript('app/controllers/HomeController.js');
    addScript('app/controllers/RegistrationController.js');

    function addScript(url)
    {
        document.write('<script type="text/javascript" src="' + url + '"></script>');
    }
})();
