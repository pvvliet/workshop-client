/**
  * Service for providing authentication logic.
  * 
  * @author Peter van Vliet <p.van.vliet@anyvation.com>
  * 
  * @param {object} $window The angular window object.
  */
angular.module('workshop').service('authenticationService', function($window, $rootScope)
{
    /**
     * Self-reference used for internal referencing.
     */
    var self = this;

    /**
     * The users access id (email address).
     */
    var accessId = null;

    /**
     * The users access key (password).
     */
    var accessKey = null;

    /**
     * The authenticated user object.
     */
    var authenticator = null;

    /**
     * Constructs a new authentication service object.
     */
    var construct = function()
    {
        restoreAuthentication();
    };

    /**
     * Gets the users access id.
     * 
     * @returns {string} The access id.
     */
    self.getAccessId = function()
    {
        return accessId;
    };

    /**
     * Sets the users access id.
     * 
     * @param {string} id The access id.
     */
    self.setAccessId = function(id)
    {
        accessId = id;
    };

    /**
     * Gets the users access key.
     * 
     * @returns {string} The access key.
     */
    self.getAccessKey = function()
    {
        return accessKey;
    };

    /**
     * Sets the users access key.
     * 
     * @param {string} key The access key.
     */
    self.setAccessKey = function(key)
    {
        accessKey = key;
    };

    /**
     * Sets the authenticated user.
     * 
     * @param {object} user The authenticated user.
     */
    self.setAuthenticator = function(user)
    {
        authenticator = user;
        
        $rootScope.authenticator = user;
        $rootScope.authenticated = user !== null;
    };

    /**
     * Gets the authenticated user.
     * 
     * @returns {object} The authenticated user.
     */
    self.getAuthenticator = function()
    {
        return authenticator;
    };

    /**
     * Creates an authorization string.
     * 
     * @returns {string} The authorization string encoded with base64.
     */
    self.createAuthorizationString = function()
    {
        return 'Basic ' + base64.encode(accessId + ':' + accessKey);
    };

    /**
     * Checks if the user is authenticated.
     * 
     * @returns {boolean} True if the user is authenticated, false otherwise.
     */
    self.isAuthenticated = function()
    {
        return (accessId !== null && accessKey !== null);
    };

    /**
     * Creates authentication information (public id and shared key).
     * The information gets stored in the session and optionally local storage.
     * 
     * @param {string} identifier The users identifier (email address).
     * @param {string} password The users password.
     */
    self.createAuthentication = function(identifier, password)
    {
        self.setAccessId(identifier);
        self.setAccessKey(password);
    };

    /**
     * Stores authentication information from session/local storage.
     * 
     * @param {boolean} storeLocal When true the authentication will be stored in the
     *                             local storage instead of the session storage.
     */
    self.storeAuthentication = function(storeLocal)
    {
        var object =
        {
            accessId: accessId,
            accessKey: accessKey,
            authenticator: authenticator
        };

        var authentication = angular.toJson(object);
        var storage = (storeLocal === true) ? $window.localStorage : $window.sessionStorage;

        storage.setItem('authentication', authentication);
    };

    /**
     * Restores authentication information from session/local storage.
     */
    var restoreAuthentication = function()
    {
        var authentication = $window.sessionStorage.getItem('authentication');

        if (authentication === null)
        {
            authentication = $window.localStorage.getItem('authentication');
        }

        if (authentication !== null)
        {
            authentication = JSON.parse(authentication);
            
            self.setAccessId(authentication.accessId);
            self.setAccessKey(authentication.accessKey);
            self.setAuthenticator(authentication.authenticator);
        }
    };

    /**
     * Deletes all stored authentication information from session/local storage.
     */
    self.deleteAuthentication = function()
    {
        self.setAccessId(null);
        self.setAccessKey(null);
        self.setAuthenticator(null);

        $window.sessionStorage.removeItem('authentication');
        $window.localStorage.removeItem('authentication');
    };

    construct();
});