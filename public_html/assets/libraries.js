
(function()
{
    // AngularJs
    addScript('assets/libraries/angular.min.js');
    addScript('assets/libraries/angular-route.min.js');
    addScript('assets/libraries/ui-bootstrap.min.js');

    // Other
    addScript('assets/libraries/base64.min.js');

    function addScript(url)
    {
        document.write('<script type="text/javascript" src="' + url + '"></script>');
    }
})();
