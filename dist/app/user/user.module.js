System.register(["@angular/core", "../public.module", "../shared/shared.module", "./user.service", "./register/register.component", "./login/login.component", "./list/list.component"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, public_module_1, shared_module_1, user_service_1, register_component_1, login_component_1, list_component_1, UserModule;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (public_module_1_1) {
                public_module_1 = public_module_1_1;
            },
            function (shared_module_1_1) {
                shared_module_1 = shared_module_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (register_component_1_1) {
                register_component_1 = register_component_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            },
            function (list_component_1_1) {
                list_component_1 = list_component_1_1;
            }
        ],
        execute: function () {
            UserModule = (function () {
                function UserModule() {
                }
                return UserModule;
            }());
            UserModule = __decorate([
                core_1.NgModule({
                    imports: [public_module_1.PublicModule, shared_module_1.SharedModule],
                    exports: [login_component_1.LoginComponent],
                    declarations: [register_component_1.RegisterComponent, login_component_1.LoginComponent, list_component_1.ListComponent],
                    providers: [user_service_1.UserService]
                })
            ], UserModule);
            exports_1("UserModule", UserModule);
        }
    };
});
//# sourceMappingURL=user.module.js.map