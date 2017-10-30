System.register(["@angular/core", "../public.module", "../user/user.module", "./home.component"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, public_module_1, user_module_1, home_component_1, HomeModule;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (public_module_1_1) {
                public_module_1 = public_module_1_1;
            },
            function (user_module_1_1) {
                user_module_1 = user_module_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            }
        ],
        execute: function () {
            HomeModule = (function () {
                function HomeModule() {
                }
                return HomeModule;
            }());
            HomeModule = __decorate([
                core_1.NgModule({
                    imports: [public_module_1.PublicModule, user_module_1.UserModule],
                    declarations: [home_component_1.HomeComponent]
                })
            ], HomeModule);
            exports_1("HomeModule", HomeModule);
        }
    };
});
//# sourceMappingURL=home.module.js.map