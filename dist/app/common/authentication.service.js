System.register(["@angular/core"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, AuthorizationService;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            AuthorizationService = (function () {
                function AuthorizationService() {
                    this.login = null;
                    this.password = null;
                    this.authenticator = null;
                    this.restoreAuthorization();
                }
                AuthorizationService.prototype.hasAuthorization = function () {
                    return this.login !== null && this.password !== null;
                };
                AuthorizationService.prototype.setAuthorization = function (login, password) {
                    this.login = login;
                    this.password = password;
                };
                AuthorizationService.prototype.storeAuthorization = function (local) {
                    var object = {
                        login: this.login,
                        password: this.password,
                        authenticator: this.authenticator
                    };
                    var authorizationString = JSON.stringify(object);
                    var storage = local ? localStorage : sessionStorage;
                    storage.setItem('authorization', authorizationString);
                };
                AuthorizationService.prototype.restoreAuthorization = function () {
                    var authorizationString = sessionStorage.getItem('authorization');
                    if (authorizationString === null) {
                        authorizationString = localStorage.getItem('authorization');
                    }
                    if (authorizationString !== null) {
                        var authorization = JSON.parse(authorizationString);
                        this.login = authorization['login'];
                        this.password = authorization['password'];
                        this.authenticator = authorization['authenticator'];
                    }
                };
                AuthorizationService.prototype.deleteAuthorization = function () {
                    this.login = null;
                    this.password = null;
                    this.authenticator = null;
                    sessionStorage.removeItem('authorization');
                    localStorage.removeItem('authorization');
                };
                AuthorizationService.prototype.createAuthorizationString = function () {
                    return 'Basic ' + btoa(this.login + ':' + this.password);
                };
                AuthorizationService.prototype.getAuthenticator = function () {
                    return this.authenticator;
                };
                return AuthorizationService;
            }());
            AuthorizationService = __decorate([
                core_1.Injectable(),
                __metadata("design:paramtypes", [])
            ], AuthorizationService);
            exports_1("AuthorizationService", AuthorizationService);
        }
    };
});
//# sourceMappingURL=authentication.service.js.map