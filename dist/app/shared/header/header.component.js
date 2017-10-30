System.register(["@angular/core", "@angular/router", "../authorization.service"], function (exports_1, context_1) {
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
    var core_1, router_1, authorization_service_1, HeaderComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (authorization_service_1_1) {
                authorization_service_1 = authorization_service_1_1;
            }
        ],
        execute: function () {
            HeaderComponent = (function () {
                function HeaderComponent(authService, router) {
                    var _this = this;
                    this.authService = authService;
                    this.router = router;
                    this.authenticated = false;
                    this.authenticated = authService.hasAuthorization();
                    authService.authorized$.subscribe(function (authorized) {
                        _this.authenticated = authorized;
                    });
                }
                HeaderComponent.prototype.goHome = function () {
                    this.router.navigate(['']);
                };
                HeaderComponent.prototype.goUsers = function () {
                    this.router.navigate(['users']);
                };
                HeaderComponent.prototype.logout = function () {
                    this.authService.deleteAuthorization();
                    this.goHome();
                };
                return HeaderComponent;
            }());
            HeaderComponent = __decorate([
                core_1.Component({
                    selector: 'app-header',
                    templateUrl: 'app/shared/header/header.component.html',
                    styleUrls: ['app/shared/header/header.component.css'],
                }),
                __metadata("design:paramtypes", [authorization_service_1.AuthorizationService, router_1.Router])
            ], HeaderComponent);
            exports_1("HeaderComponent", HeaderComponent);
        }
    };
});
//# sourceMappingURL=header.component.js.map