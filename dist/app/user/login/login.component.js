System.register(["@angular/core", "../user.service", "../user"], function (exports_1, context_1) {
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
    var core_1, user_service_1, user_1, LoginComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (user_1_1) {
                user_1 = user_1_1;
            }
        ],
        execute: function () {
            LoginComponent = (function () {
                function LoginComponent(userService) {
                    this.userService = userService;
                    this.user = new user_1.User();
                }
                LoginComponent.prototype.login = function () {
                    this.userService.login(this.user, false);
                };
                return LoginComponent;
            }());
            LoginComponent = __decorate([
                core_1.Component({
                    selector: 'user-login-form',
                    templateUrl: 'app/user/login/login.component.html',
                    styleUrls: ['app/user/login/login.component.css'],
                }),
                __metadata("design:paramtypes", [user_service_1.UserService])
            ], LoginComponent);
            exports_1("LoginComponent", LoginComponent);
        }
    };
});
//# sourceMappingURL=login.component.js.map