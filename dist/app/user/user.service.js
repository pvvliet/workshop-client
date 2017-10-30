System.register(["@angular/core", "@angular/router", "../shared/api.service", "../shared/authorization.service"], function (exports_1, context_1) {
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
    var core_1, router_1, api_service_1, authorization_service_1, UserService;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (api_service_1_1) {
                api_service_1 = api_service_1_1;
            },
            function (authorization_service_1_1) {
                authorization_service_1 = authorization_service_1_1;
            }
        ],
        execute: function () {
            UserService = (function () {
                function UserService(api, authService, router) {
                    this.api = api;
                    this.authService = authService;
                    this.router = router;
                }
                UserService.prototype.getAll = function () {
                    return this.api.get('users');
                };
                UserService.prototype.register = function (user) {
                    var _this = this;
                    var data = {
                        fullName: user.fullName,
                        postcode: user.postcode,
                        streetnumber: user.streetnumber,
                        emailAddress: user.emailAddress,
                        password: user.password
                    };
                    this.api.post('users', data).subscribe(function (data) {
                        _this.goHome();
                    }, function (error) {
                        alert('Het registreren is mislukt');
                    });
                };
                UserService.prototype.login = function (user, remember) {
                    var _this = this;
                    this.authService.setAuthorization(user.emailAddress, user.password);
                    this.api.get('users/me').subscribe(function (authenticator) {
                        _this.authService.storeAuthorization(authenticator, remember);
                        _this.goHome();
                    }, function (error) {
                        alert('Het inloggen is mislukt');
                    });
                };
                UserService.prototype.logout = function () {
                    this.authService.deleteAuthorization();
                    this.goHome();
                };
                UserService.prototype.goHome = function () {
                    this.router.navigate(['']);
                };
                return UserService;
            }());
            UserService = __decorate([
                core_1.Injectable(),
                __metadata("design:paramtypes", [api_service_1.ApiService,
                    authorization_service_1.AuthorizationService,
                    router_1.Router])
            ], UserService);
            exports_1("UserService", UserService);
        }
    };
});
//# sourceMappingURL=user.service.js.map